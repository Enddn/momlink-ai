"use client";

import { useState } from "react";
import {
  Phone, Clock, AlertTriangle, Stethoscope, Building2,
  Users, HandHeart, Heart, type LucideIcon,
} from "lucide-react";
import { Profile, Institution } from "@/lib/types";
import { getInstitutions, INST_TYPES } from "@/data/institutions";
import { ScreenHeader } from "@/components/ui";

const INST_ICON: Record<string, LucideIcon> = {
  "산부인과": Stethoscope,
  "보건소": HandHeart,
  "가족센터": Users,
  "다문화가족지원센터": Heart,
  "외국인 주민 지원 기관": Building2,
};

function InstitutionCard({ inst, region }: { inst: Institution; region: string }) {
  const Icon = INST_ICON[inst.type] || Building2;
  return (
    <div className="rounded-4xl border border-[#F0E7E2] bg-white p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-3xl bg-[#FFF1EC]">
          <Icon size={18} className="text-coral" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[15px] font-bold text-ink">{inst.name}</h3>
          <span className="mt-0.5 inline-block rounded-full bg-[#F4F0FA] px-2 py-0.5 text-[11px] font-medium text-[#8A7AA8]">
            {inst.type}
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-inkSoft">{inst.desc}</p>
          <p className="mt-0.5 text-xs text-muted">{region}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-3xl bg-[#FFFBF9] px-3 py-2.5">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
          <Phone size={14} className="text-mintText" /> {inst.phone}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-muted">
          <Clock size={11} /> 방문 전 운영시간·지원 언어 확인
        </span>
      </div>
      <p className="mt-2 text-[11px] text-[#B8A9A2]">
        전화 전, 통역 지원이 가능한지 함께 확인하면 좋아요.
      </p>
    </div>
  );
}

export default function InstitutionList({ profile }: { profile: Profile }) {
  const [filter, setFilter] = useState("전체");
  const { list } = getInstitutions(profile.region);
  const filtered = filter === "전체" ? list : list.filter((d) => d.type === filter);

  return (
    <div>
      <ScreenHeader
        title="기관 찾기"
        subtitle={`${profile.region}에서 도움받을 수 있는 기관이에요.`}
      />
      <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#FFF4EF] px-3 py-1.5 text-xs font-medium text-[#9A6A57]">
        <AlertTriangle size={12} /> 데모용 정보입니다 · 실제 연락처와 다를 수 있어요
      </div>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {INST_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              filter === t
                ? "border-coral bg-coral text-white"
                : "border-[#EFE6E1] bg-white text-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((inst, i) => (
          <InstitutionCard key={i} inst={inst} region={profile.region} />
        ))}
      </div>
    </div>
  );
}
