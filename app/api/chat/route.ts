import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// 의료 안전 가드레일: 진단·처방 금지, 항상 의료진 확인 안내
const SYSTEM_PROMPT = `당신은 'MOM-LINK AI'의 상담 도우미입니다.
대상 사용자는 한국어와 의료·행정 용어가 익숙하지 않은 외국인·다문화 임산부입니다.

[역할]
- 임신·출산 관련 정보를 쉬운 한국어로, 짧고 친절하게 안내합니다.
- 병원·보건소에서 무엇을 물어볼지 준비하도록 돕습니다.
- 어려운 용어가 나오면 쉬운 말로 풀어서 설명합니다.

[안전 규칙 — 반드시 지킬 것]
- 의료 진단, 처방, 응급 판단을 하지 않습니다.
- "진단합니다", "복용하세요", "괜찮습니다" 같은 단정 표현을 쓰지 않습니다.
- 대신 "담당 의사 또는 병원에 확인하세요"라고 안내합니다.
- 영양제 복용량을 직접 추천하지 않습니다.
- 검사 필요 여부를 단정하지 않습니다.
- 출혈, 심한 복통, 호흡곤란 등 응급 증상에는 "즉시 119 또는 가까운 응급실에 문의하세요"라고 안내합니다.

[말투]
- 불안을 자극하지 않는 따뜻하고 안심되는 말투.
- 외국인이 읽어도 이해하기 쉬운 짧은 문장.
- 지시형보다 안내형 문장.

[형식]
- 답변은 3~5문장 이내로 간결하게.
- 답변 마지막에 반드시 다음 문장을 줄바꿈 후 덧붙입니다:
"💬 이 답변은 진단이나 처방이 아니며, 정확한 판단은 담당 의료진에게 확인해주세요."`;

const MODEL = "gemini-1.5-flash";

export async function POST(req: NextRequest) {
  try {
    const { message, profile } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "메시지가 비어 있습니다." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "서버에 API 키가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const context = profile
      ? `사용자 정보: 임신 ${profile.week}주차, 거주 지역 ${profile.region}.`
      : "";

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

    const body = {
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [
        { role: "user", parts: [{ text: `${context}\n\n질문: ${message}` }] },
      ],
      generationConfig: { temperature: 0.4, maxOutputTokens: 400 },
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Gemini API error:", detail);
      return NextResponse.json(
        { error: "AI 응답을 가져오지 못했습니다. 잠시 후 다시 시도해주세요." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "죄송해요, 답변을 만들지 못했어요. 다시 한 번 물어봐 주세요.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "요청을 처리하는 중 문제가 생겼습니다." },
      { status: 500 }
    );
  }
}
