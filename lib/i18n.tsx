"use client";

import { createContext, useContext } from "react";
import { LangCode } from "@/lib/types";
import { t, UIText } from "@/data/uiText";

const LangContext = createContext<LangCode>("ko");

export function LangProvider({
  lang,
  children,
}: {
  lang: LangCode;
  children: React.ReactNode;
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

// 현재 언어의 UI 텍스트 사전을 반환
export function useT(): UIText {
  const lang = useContext(LangContext);
  return t(lang);
}

export function useLang(): LangCode {
  return useContext(LangContext);
}
