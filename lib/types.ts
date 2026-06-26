export type LangCode =
  | "ko" | "en" | "zh" | "vi" | "ja" | "mn" | "th" | "ru";

export interface Profile {
  week: number;
  region: string;
  lang: LangCode;
  insurance: "있음" | "없음";
  multicultural: "해당" | "비해당";
}

export interface ChecklistGroup {
  min: number;
  max: number;
  label: string;
  items: string[];
}

export interface EasyTerm {
  id: string;
  term: string;
  easy: string;
  ask: string;
  target: "병원" | "보건소";
}

export interface Institution {
  name: string;
  type: string;
  desc: string;
  phone: string;
}
