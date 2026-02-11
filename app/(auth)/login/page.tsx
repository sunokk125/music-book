"use client";

import Card from "@/components/molecules/Card/Card";

export default function LoginRoute() {
  return (
    <>
      <Card>
        <a href="/auth/naver?mode=login">네이버 로그인</a>
      </Card>
    </>
  );
}
