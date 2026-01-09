"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { use, useState } from "react";

function SignUp() {
  console.log("Click Sign Button");
}

export default function SignupRoute() {
  const [nickname, setNickname] = useState("");
  const { data: session, status } = useSession();

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
