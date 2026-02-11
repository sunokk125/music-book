"use client";

import { use, useState } from "react";

export default function SignupRoute() {
  // const [nickname, setNickname] = useState("");

  return (
    <>
      {/* <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      /> */}
      <a href="/auth/naver?mode=signup">네이버로 회원가입</a>
    </>
  );
}
