"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginRoute() {
  return (
    <>
      <button onClick={() => signIn("naver")}>네이버 로그인</button>
    </>
  );
}
