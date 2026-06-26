import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOM-LINK AI",
  description:
    "외국인·다문화 임산부를 위한 AI 임신·출산 정보격차 해소 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
