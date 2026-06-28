"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Profile, LangCode } from "@/lib/types";
import { LANGUAGES } from "@/data/translations";
import { REGIONS } from "@/data/institutions";
import { t } from "@/data/uiText";

const selectCls =
  "w-full rounded-xl border border-[#EFE6E1] bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-coral";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-ink">{label}</label>
      {children}
    </div>
  );
}

function ToggleRow<T extends string>({
  value, setValue, opts,
}: { value: T; setValue: (v: T) => void; opts: { val: T; label: string }[] }) {
  return (
    <div className="flex gap-2">
      {opts.map((o) => (
        <button
          key={o.val}
          onClick={() => setValue(o.val)}
          className={`flex-1 rounded-xl border py-2 text-sm font-medium transition ${
            value === o.val
              ? "border-coral bg-[#FFF1EC] text-coral"
              : "border-[#EFE6E1] bg-white text-muted"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function OnboardingForm({
  onDone,
  initial,
}: {
  onDone: (p: Profile) => void;
  initial?: Profile | null;
}) {
  const [week, setWeek] = useState(initial?.week ?? 18);
  const [region, setRegion] = useState(initial?.region ?? "경기도 안산시");
  const [lang, setLang] = useState<LangCode>(initial?.lang ?? "ko");
  const [insurance, setInsurance] = useState<Profile["insurance"]>(initial?.insurance ?? "있음");
  const [multicultural, setMulticultural] = useState<Profile["multicultural"]>(
    initial?.multicultural ?? "해당"
  );

  // 선택 중인 언어에 맞춰 온보딩 화면 문구가 즉시 바뀜
  const ui = t(lang);

  return (
    <div className="min-h-full bg-gradient-to-b from-[#FFF1EC] via-[#FFF6F0] to-[#F4F0FA] px-5 pb-10 pt-12">
      <div className="mb-7 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-sm">
          <Heart className="text-coral" fill="#F6C5B6" size={26} />
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">
          MOM-LINK <span className="text-coral">AI</span>
        </h1>
        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">
          {ui.onboardWelcome}
        </p>
      </div>

      <div className="space-y-5 rounded-4xl bg-white/80 p-5 shadow-sm backdrop-blur">
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink">{ui.labelWeek}</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1}
              max={40}
              value={week}
              onChange={(e) => setWeek(Number(e.target.value))}
              className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-[#F3D9CF] accent-coral"
            />
            <span className="w-16 shrink-0 rounded-xl bg-[#FFF1EC] py-1.5 text-center text-sm font-bold text-coral">
              {week}
            </span>
          </div>
        </div>

        <Field label={ui.labelRegion}>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className={selectCls}>
            {REGIONS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>

        <div>
          <label className="mb-2 block text-sm font-semibold text-ink">{ui.labelLanguage}</label>
          <div className="grid grid-cols-4 gap-2">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-xl border py-2 text-xs font-medium transition ${
                  lang === l.code
                    ? "border-coral bg-[#FFF1EC] text-coral"
                    : "border-[#EFE6E1] bg-white text-muted"
                }`}
              >
                <div className="text-base leading-none">{l.flag}</div>
                <div className="mt-1 leading-tight">{l.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field label={ui.labelInsurance}>
            <ToggleRow
              value={insurance}
              setValue={setInsurance}
              opts={[
                { val: "있음", label: ui.insuranceYes },
                { val: "없음", label: ui.insuranceNo },
              ]}
            />
          </Field>
          <Field label={ui.labelMulticultural}>
            <ToggleRow
              value={multicultural}
              setValue={setMulticultural}
              opts={[
                { val: "해당", label: ui.multiYes },
                { val: "비해당", label: ui.multiNo },
              ]}
            />
          </Field>
        </div>
      </div>

      <button
        onClick={() => onDone({ week, region, lang, insurance, multicultural })}
        className="mt-6 w-full rounded-3xl bg-coral py-3.5 text-base font-bold text-white shadow-md transition active:scale-[0.98] hover:bg-coralDark"
      >
        {ui.start}
      </button>
      <p className="mt-3 text-center text-xs text-[#B8A9A2]">{ui.privacyNote}</p>
    </div>
  );
}


