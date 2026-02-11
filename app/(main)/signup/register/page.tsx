"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupRoute() {
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signUp = async () => {
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    try {
      setLoading(true);

      // 👉 Next API로 요청 (여기가 핵심)
      const res = await fetch("/api/register/naver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data?.message ?? "회원가입에 실패했습니다.");
        return;
      }

      // 성공
      alert("회원가입이 완료되었습니다.");
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("네트워크 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button onClick={() => signUp()}>회원가입</button>
    </>
  );
}
