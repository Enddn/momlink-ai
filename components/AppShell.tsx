"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, ArrowLeft } from "lucide-react";
import { Profile } from "@/lib/types";
import { useProfile } from "@/lib/useProfile";
import { LanguageBadge } from "@/components/ui";
import OnboardingForm from "@/components/OnboardingForm";
import HomeDashboard from "@/components/HomeDashboard";
import EasyTerms from "@/components/EasyTermCard";
import QuestionCards from "@/components/QuestionCardGenerator";
import InstitutionList from "@/components/InstitutionList";
import Chatbot from "@/components/Chatbot";
import BottomNav, { TabId } from "@/components/BottomNav";

function Toast({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <div className="pointer-events-none absolute bottom-20 left-1/2 z-30 -translate-x-1/2">
      <div className="rounded-full bg-[#4A3B36]/90 px-4 py-2 text-sm font-medium text-white shadow-lg">
        {msg}
      </div>
    </div>
  );
}

export default function AppShell() {
  const { profile, save, loaded } = useProfile();
  const [editing, setEditing] = useState(false);
  const [tab, setTab] = useState<TabId>("home");
  const [toast, setToast] = useState("");
  const showToast = (m: string) => {
    setToast(m);
    setTimeout(() => setToast(""), 1600);
  };

  const screenRef = useRef<HTMLElement>(null);
  useEffect(() => {
    screenRef.current?.scrollTo({ top: 0 });
  }, [tab]);

  const onboarding = !profile || editing;

  const handleDone = (p: Profile) => {
    save(p);
    setEditing(false);
    setTab("home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F7EFE9] to-[#ECE6F4] p-0 sm:p-6">
      <div className="relative flex h-[100dvh] w-full max-w-[420px] flex-col overflow-hidden bg-cream shadow-2xl sm:h-[860px] sm:rounded-[2.4rem] sm:border-8 sm:border-[#2B2622]">
        {!loaded ? (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            불러오는 중…
          </div>
        ) : onboarding ? (
          <div className="h-full overflow-y-auto">
            {editing && (
              <button
                onClick={() => setEditing(false)}
                className="absolute left-4 top-4 z-30 flex items-center gap-1 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-inkSoft shadow-sm backdrop-blur"
              >
                <ArrowLeft size={13} /> 취소
              </button>
            )}
            <OnboardingForm initial={profile} onDone={handleDone} />
          </div>
        ) : (
          <>
            <header className="z-10 flex items-center justify-between border-b border-[#F0E7E2] bg-white/90 px-5 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF1EC]">
                  <Heart size={15} className="text-coral" fill="#F6C5B6" />
                </span>
                <span className="text-sm font-extrabold tracking-tight text-ink">
                  MOM-LINK <span className="text-coral">AI</span>
                </span>
              </div>
              <LanguageBadge code={profile!.lang} />
            </header>

            <main ref={screenRef} className="flex-1 overflow-y-auto px-4 py-4 pb-24">
              {tab === "home" && (
                <HomeDashboard profile={profile!} onEdit={() => setEditing(true)} go={setTab} />
              )}
              {tab === "terms" && <EasyTerms />}
              {tab === "cards" && <QuestionCards profile={profile!} onToast={showToast} />}
              {tab === "inst" && <InstitutionList profile={profile!} />}
              {tab === "chat" && (
                <div className="h-full">
                  <Chatbot profile={profile!} />
                </div>
              )}
            </main>

            <Toast msg={toast} />
            <BottomNav tab={tab} setTab={setTab} />
          </>
        )}
      </div>
    </div>
  );
}
