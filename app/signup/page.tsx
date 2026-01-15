"use client";

import { use, useState } from "react";

export default function SignupRoute() {
  const [nickname, setNickname] = useState("");

  function SignUp() {
    console.log("Click Sign Button");
  }

  return (
    <>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button onClick={() => SignUp()}>회원가입</button>
    </>
  );
}
