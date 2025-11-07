import type { Metadata } from "next";
import { ReactNode } from "react";
import { MainLayout } from "@/components/templates/MainLayout/MainLayout";

export const metadata: Metadata = {
  title: "Music Book",
  description: "Music management app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* 여기서 한 번만 공통 레이아웃 적용 */}
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
