"use client";

import { useState } from "react";
import { BookOpen, ChevronRight, Search } from "lucide-react";
import { EASY_TERMS } from "@/data/easyTerms";
import { ScreenHeader } from "@/components/ui";

export default function EasyTerms() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const list = EASY_TERMS.filter((t) => t.term.includes(q) || t.easy.includes(q));

  return (
    <div>
      <ScreenHeader title="쉬운 설명" subtitle="어려운 의료·행정 용어를 쉬운 말로 풀어드려요." />
      <div className="mb-4 flex items-center gap-2 rounded-3xl border border-[#EFE6E1] bg-white px-3 py-2.5">
        <Search size={16} className="text-[#B8A9A2]" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="용어를 검색해보세요 (예: 철분제)"
          className="w-full text-sm text-ink outline-none placeholder:text-[#C4B6AF]"
        />
      </div>
      <div className="space-y-3">
        {list.map((t) => (
          <div key={t.id} className="overflow-hidden rounded-4xl border border-[#F0E7E2] bg-white">
            <button
              onClick={() => setOpen(open === t.id ? null : t.id)}
              className="flex w-full items-center justify-between p-4 text-left"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFF1EC]">
                  <BookOpen size={15} className="text-coral" />
                </span>
                <span className="text-[15px] font-bold text-ink">{t.term}</span>
              </div>
              <ChevronRight
                size={18}
                className={`text-[#C4B6AF] transition ${open === t.id ? "rotate-90" : ""}`}
              />
            </button>
            {open === t.id && (
              <div className="space-y-3 border-t border-[#F3ECE8] bg-[#FFFBF9] p-4">
                <p className="text-sm leading-relaxed text-[#5C4D47]">{t.easy}</p>
                <div className="rounded-3xl bg-white p-3">
                  <p className="mb-1 text-xs font-semibold text-[#9A6A57]">
                    {t.target}에 이렇게 물어보세요
                  </p>
                  <p className="text-sm font-medium text-ink">“{t.ask}”</p>
                </div>
              </div>
            )}
          </div>
        ))}
        {list.length === 0 && (
          <p className="rounded-3xl bg-white p-6 text-center text-sm text-muted">
            검색 결과가 없어요. 다른 단어로 찾아보세요.
          </p>
        )}
      </div>
    </div>
  );
}
