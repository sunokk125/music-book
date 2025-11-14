import type { Metadata } from "next";
import { ReactNode } from "react";
import { MainLayout } from "@/components/templates/MainLayout/MainLayout";
import QueryProvider from "@/query-provider";

export const metadata: Metadata = {
  title: "Music Book",
  description: "Music management app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <MainLayout>{children}</MainLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
