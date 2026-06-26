"use client";

import { useState } from "react";
import {
  Pencil, Heart, Check, ClipboardList,
  MessageSquareText, HandHeart, type LucideIcon,
} from "lucide-react";
import { Profile } from "@/lib/types";
import { getChecklist } from "@/data/pregnancyChecklists";
import { LanguageBadge, SafetyNotice } from "@/components/ui";
import type { TabId } from "@/components/BottomNav";

function PregnancyChecklist({ week }: { week: number }) {
  const cl = getChecklist(week);
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked((p) => ({ ...p, [i]: !p[i] }));
  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="mb-4 rounded-4xl border border-[#F0E7E2] bg-white p-5">
      <div className="mb-1 flex items-center gap-2">
        <ClipboardList size={18} className="text-coral" />
        <h2 className="text-base font-bold text-ink">오늘의 임신 체크리스트</h2>
      </div>
      <p className="mb-3 text-sm text-muted">
        현재 {week}주차 · {cl.label}에 확인하면 좋은 항목이에요.
        {doneCount > 0 && (
          <span className="ml-1 font-semibold text-coral">
            {doneCount}/{cl.items.length} 확인
          </span>
        )}
      </p>
      <div className="space-y-2">
        {cl.items.map((it, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="flex w-full items-start gap-3 rounded-3xl border border-[#F3ECE8] bg-[#FFFBF9] p-3 text-left transition active:scale-[0.99]"
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                checked[i] ? "border-coral bg-coral" : "border-[#E0CFC8] bg-white"
              }`}
            >
              {checked[i] && <Check size={12} className="text-white" />}
            </span>
            <span
              className={`text-sm leading-relaxed ${
                checked[i] ? "text-[#B8A9A2] line-through" : "text-[#5C4D47]"
              }`}
            >
              {it}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-3 rounded-xl bg-[#F4F0FA] px-3 py-2 text-xs text-[#8A7AA8]">
        💜 검사나 복용 여부는 단정하지 않아요. 정확한 판단은 담당 의사 또는 병원에 확인해주세요.
      </p>
    </div>
  );
}

function ActionTile({
  color, icon: Icon, title, desc, onClick,
}: {
  color: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start gap-2 rounded-4xl border border-[#F0E7E2] p-4 text-left transition active:scale-[0.98]"
      style={{ background: color }}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/70">
        <Icon size={18} className="text-[#5C4D47]" />
      </span>
      <div>
        <p className="text-sm font-bold text-ink">{title}</p>
        <p className="text-xs text-muted">{desc}</p>
      </div>
    </button>
  );
}

export default function HomeDashboard({
  profile,
  onEdit,
  go,
}: {
  profile: Profile;
  onEdit: () => void;
  go: (t: TabId) => void;
}) {
  return (
    <div>
      <div className="mb-4 rounded-4xl bg-gradient-to-br from-[#FFE6DD] to-[#F1E8FA] p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-[#9A6A57]">반가워요, 함께할게요 🌷</p>
            <p className="mt-1 text-2xl font-extrabold text-ink">임신 {profile.week}주차</p>
            <p className="mt-0.5 text-sm text-inkSoft">{profile.region}</p>
          </div>
          <button
            onClick={onEdit}
            className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#9A6A57] backdrop-blur transition active:scale-95"
          >
            <Pencil size={12} /> 내 정보 수정
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <LanguageBadge code={profile.lang} />
          {profile.multicultural === "해당" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-inkSoft">
              <Heart size={12} /> 다문화가족
            </span>
          )}
          <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-inkSoft">
            건강보험 {profile.insurance}
          </span>
        </div>
      </div>

      <PregnancyChecklist week={profile.week} />

      <div className="mb-4 grid grid-cols-2 gap-3">
        <ActionTile color="#FFF1EC" icon={MessageSquareText} title="병원 질문 카드" desc="진료 때 보여주세요" onClick={() => go("cards")} />
        <ActionTile color="#EAF6F0" icon={HandHeart} title="보건소 문의 문장" desc="등록·지원 문의" onClick={() => go("cards")} />
      </div>

      <SafetyNotice />
    </div>
  );
}
