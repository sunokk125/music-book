"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginRoute() {
  return (
    <>
      <button onClick={() => signIn("naver", { callbackUrl: "/" })}>
        네이버 로그인
      </button>
      <button onClick={() => signIn("naver", { callbackUrl: "/signup" })}>
        네이버로 회원가입
      </button>
    </>
  );
}
