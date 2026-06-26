import { Profile } from "@/lib/types";

export const SAFETY_TEXT =
  "MOM-LINK AI는 의료 진단이나 처방을 제공하지 않습니다. 건강 상태와 검사 여부는 반드시 담당 의료진에게 확인해주세요. 갑작스러운 출혈, 심한 복통, 호흡곤란 등 응급 증상이 있으면 즉시 119 또는 가까운 응급실에 문의하세요.";

export function buildHospitalCard(profile: Profile): string {
  return [
    `저는 임신 ${profile.week}주차입니다.`,
    "한국어가 익숙하지 않습니다.",
    "천천히 설명해주시면 감사하겠습니다.",
    "오늘 확인해야 할 검사가 있나요?",
    "아기의 상태는 괜찮은가요?",
    "제가 먹고 있는 영양제를 계속 먹어도 되나요?",
    "다음 진료는 언제 오면 되나요?",
    "주의해야 할 증상이 있나요?",
    "통역 도움을 받을 수 있나요?",
  ].join("\n");
}

export function buildHealthScript(profile: Profile): string {
  return [
    "안녕하세요.",
    `저는 현재 임신 ${profile.week}주차입니다.`,
    `${profile.region}에 거주하고 있습니다.`,
    "한국어가 익숙하지 않습니다.",
    "임산부 등록을 하고 싶습니다.",
    "제가 받을 수 있는 임산부 지원이 있는지 알고 싶습니다.",
    "필요한 서류가 무엇인지 알려주세요.",
    "통역 지원이 가능한지도 궁금합니다.",
  ].join("\n");
}
