"use client";

import { Home, BookOpen, MessageSquareText, MapPin, Sparkles, type LucideIcon } from "lucide-react";
import { useT } from "@/lib/i18n";

export type TabId = "home" | "terms" | "cards" | "inst" | "chat";

const TAB_META: { id: TabId; icon: LucideIcon }[] = [
  { id: "home", icon: Home },
  { id: "terms", icon: BookOpen },
  { id: "cards", icon: MessageSquareText },
  { id: "inst", icon: MapPin },
  { id: "chat", icon: Sparkles },
];

export default function BottomNav({
  tab,
  setTab,
}: {
  tab: TabId;
  setTab: (t: TabId) => void;
}) {
  const ui = useT();
  const labels: Record<TabId, string> = {
    home: ui.tabHome,
    terms: ui.tabTerms,
    cards: ui.tabCards,
    inst: ui.tabInst,
    chat: ui.tabChat,
  };
  return (
    <nav className="absolute inset-x-0 bottom-0 z-20 flex border-t border-[#F0E7E2] bg-white/95 backdrop-blur">
      {TAB_META.map((t) => {
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
              {labels[t.id]}
            </span>
            {active && <span className="absolute -top-px h-0.5 w-8 rounded-full bg-coral" />}
          </button>
        );
      })}
    </nav>
  );
}
