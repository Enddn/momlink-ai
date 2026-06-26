import { Institution } from "@/lib/types";

export const REGIONS = [
  "서울특별시",
  "경기도 안산시",
  "경기도 수원시",
  "인천광역시",
  "부산광역시",
  "대구광역시",
  "광주광역시",
  "대전광역시",
  "제주특별자치도",
];

export const INSTITUTIONS: Record<string, Institution[]> = {
  "경기도 안산시": [
    { name: "안산시 단원보건소", type: "보건소", desc: "임산부 등록 및 보건소 지원 문의 가능", phone: "031-000-0000" },
    { name: "안산시 가족센터", type: "가족센터", desc: "다문화가족 상담 및 생활 정보 지원", phone: "031-111-1111" },
    { name: "안산 외국인주민지원센터", type: "외국인 주민 지원 기관", desc: "외국인 주민 생활 상담 및 통역 지원 문의", phone: "031-222-2222" },
    { name: "맘링크 여성병원", type: "산부인과", desc: "임신 진료 및 분만 상담 가능", phone: "031-333-3333" },
    { name: "안산다문화가족지원센터", type: "다문화가족지원센터", desc: "통역·번역 및 임신·출산 정보 지원", phone: "031-444-4444" },
  ],
  default: [
    { name: "○○구 보건소", type: "보건소", desc: "임산부 등록 및 보건소 지원 문의 가능", phone: "0XX-000-0000" },
    { name: "○○ 가족센터", type: "가족센터", desc: "다문화가족 상담 및 생활 정보 지원", phone: "0XX-111-1111" },
    { name: "○○ 외국인주민지원센터", type: "외국인 주민 지원 기관", desc: "외국인 주민 생활 상담 및 통역 지원 문의", phone: "0XX-222-2222" },
    { name: "○○ 여성병원", type: "산부인과", desc: "임신 진료 및 분만 상담 가능", phone: "0XX-333-3333" },
    { name: "○○다문화가족지원센터", type: "다문화가족지원센터", desc: "통역·번역 및 임신·출산 정보 지원", phone: "0XX-444-4444" },
  ],
};

export const INST_TYPES = [
  "전체",
  "산부인과",
  "보건소",
  "가족센터",
  "다문화가족지원센터",
  "외국인 주민 지원 기관",
];

export function getInstitutions(region: string): { list: Institution[]; isDemo: boolean } {
  const list = INSTITUTIONS[region] || INSTITUTIONS.default;
  return { list, isDemo: !INSTITUTIONS[region] };
}
