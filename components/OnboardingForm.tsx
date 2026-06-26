"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Profile, LangCode } from "@/lib/types";
import { LANGUAGES } from "@/data/translations";
import { REGIONS } from "@/data/institutions";

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
}: { value: T; setValue: (v: T) => void; opts: T[] }) {
  return (
    <div className="flex gap-2">
      {opts.map((o) => (
        <button
          key={o}
          onClick={() => setValue(o)}
          className={`flex-1 rounded-xl border py-2 text-sm font-medium transition ${
            value === o
              ? "border-coral bg-[#FFF1EC] text-coral"
              : "border-[#EFE6E1] bg-white text-muted"
          }`}
        >
          {o}
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
  const [lang, setLang] = useState<LangCode>(initial?.lang ?? "vi");
  const [insurance, setInsurance] = useState<Profile["insurance"]>(initial?.insurance ?? "있음");
  const [multicultural, setMulticultural] = useState<Profile["multicultural"]>(
    initial?.multicultural ?? "해당"
  );

  return (
    <div className="min-h-full bg-gradient-to-b from-[#FFF1EC] via-[#FFF6F0] to-[#F4F0FA] px-5 pb-10 pt-12">
      <div className="mb-7 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-sm">
          <Heart className="text-coral" fill="#F6C5B6" size={26} />
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">
          MOM-LINK <span className="text-coral">AI</span>
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          한국어가 익숙하지 않아도 괜찮아요.
          <br />
          몇 가지만 알려주시면 지금 필요한 정보를 안내해드릴게요.
        </p>
      </div>

      <div className="space-y-5 rounded-4xl bg-white/80 p-5 shadow-sm backdrop-blur">
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink">임신 주수</label>
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
              {week}주
            </span>
          </div>
        </div>

        <Field label="거주 지역">
          <select value={region} onChange={(e) => setRegion(e.target.value)} className={selectCls}>
            {REGIONS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>

        <div>
          <label className="mb-2 block text-sm font-semibold text-ink">사용하는 언어</label>
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
          <Field label="건강보험 여부">
            <ToggleRow value={insurance} setValue={setInsurance} opts={["있음", "없음"]} />
          </Field>
          <Field label="다문화가족 여부">
            <ToggleRow value={multicultural} setValue={setMulticultural} opts={["해당", "비해당"]} />
          </Field>
        </div>
      </div>

      <button
        onClick={() => onDone({ week, region, lang, insurance, multicultural })}
        className="mt-6 w-full rounded-3xl bg-coral py-3.5 text-base font-bold text-white shadow-md transition active:scale-[0.98] hover:bg-coralDark"
      >
        시작하기
      </button>
      <p className="mt-3 text-center text-xs text-[#B8A9A2]">
        입력한 정보는 이 기기에만 저장되며, 안내를 돕기 위해서만 사용돼요.
      </p>
    </div>
  );
}
