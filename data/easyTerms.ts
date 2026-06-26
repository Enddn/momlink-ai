import { EasyTerm } from "@/lib/types";

export const EASY_TERMS: EasyTerm[] = [
  { id: "gdm", term: "임신성 당뇨 검사", easy: "임신 중에 혈당이 높은지 확인하는 검사예요.", ask: "임신성 당뇨 검사는 언제 하나요?", target: "병원" },
  { id: "screen", term: "기형아 선별검사", easy: "아기의 건강 상태를 확인하기 위한 검사예요.", ask: "이 검사는 꼭 받아야 하나요?", target: "병원" },
  { id: "prenatal", term: "산전검사", easy: "임신 중 엄마와 아기의 건강을 확인하는 검사예요.", ask: "오늘 받아야 할 산전검사가 있나요?", target: "병원" },
  { id: "register", term: "보건소 임산부 등록", easy: "가까운 보건소에 임산부 정보를 등록하고 지원을 받는 절차예요.", ask: "임산부 등록을 하려면 어떤 서류가 필요한가요?", target: "보건소" },
  { id: "iron", term: "철분제", easy: "임신 중 부족해질 수 있는 철분을 보충하는 영양제예요.", ask: "철분제는 언제부터 먹으면 좋을까요?", target: "병원" },
  { id: "folic", term: "엽산", easy: "아기의 건강한 성장을 돕기 위해 임신 초기에 챙기는 영양소예요.", ask: "엽산은 언제까지 먹으면 될까요?", target: "병원" },
  { id: "ultra", term: "초음파 검사", easy: "화면으로 아기의 모습과 상태를 살펴보는 검사예요.", ask: "다음 초음파 검사는 언제인가요?", target: "병원" },
];
