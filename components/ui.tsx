"use client";

import { useState } from "react";
import {
  Copy, Check, Languages, ShieldCheck,
} from "lucide-react";
import { LangCode } from "@/lib/types";
import { langLabel } from "@/data/translations";
import { SAFETY_TEXT } from "@/lib/cardText";

export function CopyButton({
  text,
  label = "복사하기",
  onToast,
}: {
  text: string;
  label?: string;
  onToast?: (m: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* ignore */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    onToast?.("복사되었습니다");
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <button
      onClick={handle}
      className="inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white shadow-sm transition active:scale-95 hover:bg-coralDark"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "복사됨" : label}
    </button>
  );
}

export function LanguageBadge({ code }: { code: LangCode }) {
  const lang = langLabel(code);
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-lavender px-2.5 py-1 text-xs font-medium text-lavenderText">
      <Languages size={12} /> {lang.flag} {lang.label}
    </span>
  );
}

export function SafetyNotice({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`flex gap-2.5 rounded-3xl border border-[#F3D9CF] bg-[#FFF4EF] ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <ShieldCheck size={compact ? 18 : 20} className="mt-0.5 shrink-0 text-coral" />
      <p className={`leading-relaxed text-[#9A6A57] ${compact ? "text-xs" : "text-[13px]"}`}>
        {SAFETY_TEXT}
      </p>
    </div>
  );
}

export function ScreenHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold text-ink">{title}</h1>
      {subtitle && <p className="mt-1 text-sm leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}
