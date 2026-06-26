import { Profile } from "@/lib/types";

export const CHAT_SUGGESTIONS = [
  "임당검사가 뭐예요?",
  "18주차인데 병원에서 뭘 물어봐야 하나요?",
  "보건소에서 받을 수 있는 지원이 있나요?",
];

const SAFETY =
  "\n\n💬 이 답변은 진단이나 처방이 아니며, 정확한 판단은 담당 의료진에게 확인해주세요.";

// rule-based mock response — 실제 LLM API 연동 전 데모용
export function mockReply(input: string, profile: Profile): string {
  const q = input.replace(/\s/g, "");
  let body: string;

  if (q.includes("임당") || q.includes("임신성당뇨")) {
    body =
      "‘임신성 당뇨 검사’는 임신 중에 혈당이 높은지 확인하는 검사예요. 보통 임신 중기쯤 받게 되는데, 정확한 시기와 필요 여부는 병원에서 “임신성 당뇨 검사는 언제 하나요?”라고 물어보면 안내받을 수 있어요.";
  } else if (q.includes("보건소")) {
    body = `보건소에서는 임산부 등록을 하고, 받을 수 있는 지원을 안내받을 수 있어요. ${profile.region} 보건소에 “임산부 등록을 하고 싶습니다. 필요한 서류가 무엇인가요?”라고 문의해보세요. ‘질문 카드’ 탭에서 보건소 문의 문장을 바로 만들 수 있어요.`;
  } else if (q.includes("병원") || q.includes("질문") || q.includes("물어")) {
    body = `병원에서는 “오늘 받아야 할 검사가 있나요?”, “아기 상태는 괜찮은가요?”, “다음 진료는 언제인가요?” 같은 질문을 준비하면 좋아요. ‘질문 카드’ 탭에서 ${profile.week}주차에 맞는 병원 질문 카드를 만들어 보여줄 수 있어요.`;
  } else if (q.includes("영양제") || q.includes("엽산") || q.includes("철분")) {
    body =
      "엽산·철분 같은 영양제는 임신 시기에 따라 챙기면 좋지만, 복용 시작 시기나 양은 사람마다 달라요. 직접 양을 정하기보다 “제가 먹는 영양제를 계속 먹어도 될까요?”라고 담당 의사에게 확인해보세요.";
  } else if (q.includes("응급") || q.includes("출혈") || q.includes("복통") || q.includes("배아파")) {
    body =
      "갑작스러운 출혈, 심한 복통, 호흡곤란 같은 응급 증상이 있으면 즉시 119 또는 가까운 응급실에 문의하세요. 망설이지 말고 도움을 요청하는 것이 가장 안전해요.";
  } else {
    body =
      "정확한 의료 판단은 병원에 문의해주세요. 이 서비스는 임신·출산 정보를 쉽게 이해하고, 병원·보건소에서 무엇을 물어볼지 준비하도록 돕는 안내 서비스예요. 검사, 보건소 지원, 병원 질문, 영양제 중 궁금한 것을 물어봐 주세요.";
  }

  return body + SAFETY;
}
