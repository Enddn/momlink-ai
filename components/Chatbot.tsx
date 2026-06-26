"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Send } from "lucide-react";
import { Profile } from "@/lib/types";
import { mockReply, CHAT_SUGGESTIONS } from "@/data/mockChatResponses";
import { ScreenHeader, SafetyNotice } from "@/components/ui";

interface Msg {
  role: "ai" | "user";
  text: string;
}

export default function Chatbot({ profile }: { profile: Profile }) {
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "ai",
      text: `안녕하세요 🌷 MOM-LINK AI예요.\n임신 ${profile.week}주차, ${profile.region}에 맞춰 도와드릴게요. 궁금한 점을 편하게 물어봐 주세요.`,
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = (val?: string) => {
    const text = (val ?? input).trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(
      () => setMsgs((m) => [...m, { role: "ai", text: mockReply(text, profile) }]),
      350
    );
  };

  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="AI 상담" subtitle="쉬운 말로 안내해드려요. 진단·처방은 하지 않아요." />
      <div className="mb-3">
        <SafetyNotice compact />
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto pb-2">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            {m.role === "ai" && (
              <span className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF1EC]">
                <Sparkles size={13} className="text-coral" />
              </span>
            )}
            <div
              className={`max-w-[78%] whitespace-pre-line rounded-3xl px-3.5 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "rounded-br-md bg-coral text-white"
                  : "rounded-bl-md border border-[#F0E7E2] bg-white text-ink"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {msgs.length <= 1 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {CHAT_SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="rounded-full border border-[#EFE6E1] bg-white px-3 py-1.5 text-xs text-inkSoft transition active:scale-95"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 rounded-3xl border border-[#EFE6E1] bg-white px-3 py-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="궁금한 점을 입력해보세요"
          className="w-full text-sm text-ink outline-none placeholder:text-[#C4B6AF]"
        />
        <button
          onClick={() => send()}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-coral text-white transition active:scale-95"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
