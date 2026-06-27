import { EasyTerm, LangCode } from "@/lib/types";

// term(용어 이름)과 ask(병원/보건소에서 보여줄 한국어 문장)는 한국어 유지.
// easy(쉬운 설명)만 사용자 모국어로 번역.
interface EasyTermBase {
  id: string;
  term: string; // 한국어 유지
  ask: string;  // 한국어 유지 (병원에 그대로 보여주는 용도)
  target: "병원" | "보건소";
}

const TERMS_BASE: EasyTermBase[] = [
  { id: "gdm", term: "임신성 당뇨 검사", ask: "임신성 당뇨 검사는 언제 하나요?", target: "병원" },
  { id: "screen", term: "기형아 선별검사", ask: "이 검사는 꼭 받아야 하나요?", target: "병원" },
  { id: "prenatal", term: "산전검사", ask: "오늘 받아야 할 산전검사가 있나요?", target: "병원" },
  { id: "register", term: "보건소 임산부 등록", ask: "임산부 등록을 하려면 어떤 서류가 필요한가요?", target: "보건소" },
  { id: "iron", term: "철분제", ask: "철분제는 언제부터 먹으면 좋을까요?", target: "병원" },
  { id: "folic", term: "엽산", ask: "엽산은 언제까지 먹으면 될까요?", target: "병원" },
  { id: "ultra", term: "초음파 검사", ask: "다음 초음파 검사는 언제인가요?", target: "병원" },
];

// 쉬운 설명 (언어별, id 순서 동일)
const EASY: Record<LangCode, string[]> = {
  ko: [
    "임신 중에 혈당이 높은지 확인하는 검사예요.",
    "아기의 건강 상태를 확인하기 위한 검사예요.",
    "임신 중 엄마와 아기의 건강을 확인하는 검사예요.",
    "가까운 보건소에 임산부 정보를 등록하고 지원을 받는 절차예요.",
    "임신 중 부족해질 수 있는 철분을 보충하는 영양제예요.",
    "아기의 건강한 성장을 돕기 위해 임신 초기에 챙기는 영양소예요.",
    "화면으로 아기의 모습과 상태를 살펴보는 검사예요.",
  ],
  en: [
    "A test to check if your blood sugar is high during pregnancy.",
    "A test to check the baby's health condition.",
    "A test to check the health of mother and baby during pregnancy.",
    "The process of registering your pregnancy at a local health center to receive support.",
    "A supplement to replenish iron that can run low during pregnancy.",
    "A nutrient taken in early pregnancy to support the baby's healthy growth.",
    "A test that looks at the baby's appearance and condition on a screen.",
  ],
  zh: [
    "检查怀孕期间血糖是否偏高的检查。",
    "确认宝宝健康状态的检查。",
    "怀孕期间确认妈妈和宝宝健康的检查。",
    "在附近卫生站登记孕妇信息并获得支援的流程。",
    "补充怀孕期间可能不足的铁质的营养剂。",
    "为帮助宝宝健康成长，在怀孕初期补充的营养素。",
    "通过屏幕观察宝宝样子和状态的检查。",
  ],
  vi: [
    "Xét nghiệm kiểm tra đường huyết có cao không trong thai kỳ.",
    "Xét nghiệm để kiểm tra tình trạng sức khỏe của bé.",
    "Xét nghiệm kiểm tra sức khỏe của mẹ và bé trong thai kỳ.",
    "Thủ tục đăng ký thông tin thai sản tại trung tâm y tế gần nhà để nhận hỗ trợ.",
    "Thực phẩm bổ sung để bù lượng sắt có thể thiếu trong thai kỳ.",
    "Dưỡng chất bổ sung trong giai đoạn đầu thai kỳ để giúp bé phát triển khỏe mạnh.",
    "Xét nghiệm quan sát hình ảnh và tình trạng của bé qua màn hình.",
  ],
  ja: [
    "妊娠中に血糖値が高いかを確認する検査です。",
    "赤ちゃんの健康状態を確認するための検査です。",
    "妊娠中にお母さんと赤ちゃんの健康を確認する検査です。",
    "近くの保健所に妊婦情報を登録し支援を受ける手続きです。",
    "妊娠中に不足しがちな鉄分を補う栄養剤です。",
    "赤ちゃんの健やかな成長を助けるため妊娠初期に摂る栄養素です。",
    "画面で赤ちゃんの姿や状態を見る検査です。",
  ],
  mn: [],
  th: [],
  ru: [],
};
EASY.mn = EASY.en;
EASY.th = EASY.en;
EASY.ru = EASY.en;

export function getEasyTerms(lang: LangCode): EasyTerm[] {
  const easy = EASY[lang] || EASY.ko;
  return TERMS_BASE.map((t, i) => ({
    id: t.id,
    term: t.term,
    easy: easy[i],
    ask: t.ask,
    target: t.target,
  }));
}

// 하위 호환 (기본 한국어)
export const EASY_TERMS: EasyTerm[] = getEasyTerms("ko");
