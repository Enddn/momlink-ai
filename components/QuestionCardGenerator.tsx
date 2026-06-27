"use client";

import { useState } from "react";
import { MessageSquareText, HandHeart, Languages } from "lucide-react";
import { Profile, LangCode } from "@/lib/types";
import { buildHospitalCard, buildHealthScript } from "@/lib/cardText";
import { CARD_NOTICE, HEALTH_NOTICE } from "@/data/translations";
import { CopyButton, ScreenHeader, SafetyNotice } from "@/components/ui";
import { useT } from "@/lib/i18n";

function GeneratedCard({
  kind,
  profile,
  notice,
  onToast,
}: {
  kind: "hospital" | "health";
  profile: Profile;
  notice: Record<LangCode, string>;
  onToast: (m: string) => void;
}) {
  const ui = useT();
  const [text, setText] = useState<string | null>(null);
  const isHospital = kind === "hospital";
  const generate = () =>
    setText(isHospital ? buildHospitalCard(profile) : buildHealthScript(profile));

  return (
    <div className="rounded-4xl border border-[#F0E7E2] bg-white p-5">
      <div className="mb-1 flex items-center gap-2">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${
            isHospital ? "bg-[#FFF1EC]" : "bg-mint"
          }`}
        >
          {isHospital ? (
            <MessageSquareText size={18} className="text-coral" />
          ) : (
            <HandHeart size={18} className="text-mintText" />
          )}
        </span>
        <h2 className="text-base font-bold text-ink">
          {isHospital ? ui.hospitalCardTitle : ui.healthScriptTitle}
        </h2>
      </div>
      <p className="mb-4 text-sm text-muted">
        {isHospital ? ui.hospitalCardSubtitle : ui.healthScriptSubtitle}
      </p>

      {!text ? (
        <button
          onClick={generate}
          className={`w-full rounded-3xl py-3 text-sm font-bold text-white shadow-sm transition active:scale-[0.98] ${
            isHospital ? "bg-coral hover:bg-coralDark" : "bg-mintText hover:bg-[#379070]"
          }`}
        >
          {isHospital ? ui.hospitalCardBtn : ui.healthScriptBtn}
        </button>
      ) : (
        <div className="space-y-3">
          <div className="rounded-3xl bg-[#FFFBF9] p-4">
            <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#FFF1EC] px-2.5 py-1 text-[11px] font-semibold text-coral">
              {isHospital ? ui.hospitalCardBadge : ui.healthScriptBadge}
            </div>
            <p className="whitespace-pre-line text-[15px] leading-relaxed text-ink">{text}</p>
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-white p-3">
              <Languages size={15} className="mt-0.5 shrink-0 text-lavenderText" />
              <div>
                <p className="text-sm font-medium text-lavenderText">
                  {notice[profile.lang] || notice.en}
                </p>
                <p className="text-xs text-muted">{notice.ko}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={generate} className="text-xs font-medium text-muted underline">
              {ui.regenerate}
            </button>
            <CopyButton text={text} onToast={onToast} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function QuestionCards({
  profile,
  onToast,
}: {
  profile: Profile;
  onToast: (m: string) => void;
}) {
  const ui = useT();
  return (
    <div className="space-y-4">
      <ScreenHeader title={ui.cardsTitle} subtitle={ui.cardsSubtitle} />
      <GeneratedCard kind="hospital" profile={profile} notice={CARD_NOTICE} onToast={onToast} />
      <GeneratedCard kind="health" profile={profile} notice={HEALTH_NOTICE} onToast={onToast} />
      <SafetyNotice compact />
    </div>
  );
}
