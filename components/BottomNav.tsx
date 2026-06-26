"use client";

import { Home, BookOpen, MessageSquareText, MapPin, Sparkles, type LucideIcon } from "lucide-react";

export type TabId = "home" | "terms" | "cards" | "inst" | "chat";

const TABS: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "홈", icon: Home },
  { id: "terms", label: "쉬운 설명", icon: BookOpen },
  { id: "cards", label: "질문 카드", icon: MessageSquareText },
  { id: "inst", label: "기관 찾기", icon: MapPin },
  { id: "chat", label: "AI 상담", icon: Sparkles },
];

export default function BottomNav({
  tab,
  setTab,
}: {
  tab: TabId;
  setTab: (t: TabId) => void;
}) {
  return (
    <nav className="absolute inset-x-0 bottom-0 z-20 flex border-t border-[#F0E7E2] bg-white/95 backdrop-blur">
      {TABS.map((t) => {
        const active = tab === t.id;
        const Icon = t.icon;
        return (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="relative flex flex-1 flex-col items-center gap-0.5 py-2.5"
          >
            <Icon size={20} className={active ? "text-coral" : "text-[#B8A9A2]"} />
            <span className={`text-[10px] font-medium ${active ? "text-coral" : "text-[#B8A9A2]"}`}>
              {t.label}
            </span>
            {active && <span className="absolute -top-px h-0.5 w-8 rounded-full bg-coral" />}
          </button>
        );
      })}
    </nav>
  );
}
