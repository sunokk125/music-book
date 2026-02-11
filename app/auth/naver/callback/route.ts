import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const token = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const storedState = req.cookies.get("naver_oauth_state")?.value;
  const mode = req.cookies.get("naver_oauth_mode")?.value ?? "login";

  if (!token || !state || !storedState || state !== storedState) {
    return NextResponse.redirect(
      new URL("/login?error=invalid_oauth", req.url),
    );
  }

  // 1회용 정리
  const resBase = NextResponse.next();
  resBase.cookies.delete("naver_oauth_state");
  resBase.cookies.delete("naver_oauth_mode");

  // ───────── 분기 ─────────

  // 🔹 로그인 플로우
  if (mode === "login") {
    const backendRes = await fetch(
      `${process.env.BACKEND_BASE_URL}/auth/login/social/STC1`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      },
    );

    if (!backendRes.ok) {
      return NextResponse.redirect(new URL("/login?error=failed", req.url));
    }

    const data = await backendRes.json().catch(() => ({}));

    const res = NextResponse.redirect(new URL("/", req.url));
    if (data?.accessToken) {
      res.cookies.set("access_token", data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60,
      });
    }

    console.log(`accessToken: ${data.accessToken}`);
    res.cookies.delete("naver_oauth_code");
    return res;
  }

  // 🔹 회원가입 플로우
  const res = NextResponse.redirect(new URL("/signup/register", req.url));
  res.cookies.set("naver_oauth_code", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 5,
  });

  return res;
}
