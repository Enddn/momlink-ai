import { LangCode } from "@/lib/types";

export const LANGUAGES: { code: LangCode; label: string; flag: string }[] = [
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "mn", label: "Монгол", flag: "🇲🇳" },
  { code: "th", label: "ไทย", flag: "🇹🇭" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

// mock translation — 실제 번역 API 연동 전 데모용 안내 문구
export const CARD_NOTICE: Record<LangCode, string> = {
  ko: "이 카드를 병원 직원에게 보여주세요.",
  en: "Please show this card to the hospital staff.",
  zh: "请把这张卡给医院工作人员看。",
  vi: "Vui lòng đưa thẻ này cho nhân viên bệnh viện.",
  ja: "このカードを病院のスタッフに見せてください。",
  mn: "Энэ картыг эмнэлгийн ажилтанд үзүүлнэ үү.",
  th: "กรุณาแสดงบัตรนี้แก่เจ้าหน้าที่โรงพยาบาล",
  ru: "Пожалуйста, покажите эту карточку персоналу больницы.",
};

export const HEALTH_NOTICE: Record<LangCode, string> = {
  ko: "이 내용을 보건소 직원에게 보여주세요.",
  en: "Please show this to the public health center staff.",
  zh: "请把这些内容给卫生站工作人员看。",
  vi: "Vui lòng đưa nội dung này cho nhân viên trung tâm y tế.",
  ja: "この内容を保健所のスタッフに見せてください。",
  mn: "Энэ агуулгыг эрүүл мэндийн төвийн ажилтанд үзүүлнэ үү.",
  th: "กรุณาแสดงข้อความนี้แก่เจ้าหน้าที่ศูนย์อนามัย",
  ru: "Пожалуйста, покажите это сотруднику центра здоровья.",
};

export function langLabel(code: LangCode) {
  return LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
}
