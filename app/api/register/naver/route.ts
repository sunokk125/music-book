// app/api/register/naver/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { nickname } = await req.json();
  const token = req.cookies.get("naver_oauth_code")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "네이버 인증이 만료됐습니다." },
      { status: 401 }
    );
  }

  const backendRes = await fetch(
    `${process.env.BACKEND_BASE_URL}/auth/signup/ST1`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, nickname }),
    }
  );

  if (!backendRes.ok) {
    return NextResponse.json(
      { message: "백엔드 회원가입 실패" },
      { status: 502 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.delete("naver_oauth_code"); // 1회용 정리
  return res;
}
