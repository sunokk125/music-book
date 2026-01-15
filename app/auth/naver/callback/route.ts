import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const storedState = req.cookies.get("naver_oauth_state")?.value;

  if (!code || !state) {
    return NextResponse.redirect(new URL("/login?error=missing_code", req.url));
  }

  // state 검증 (필수)
  if (!storedState || storedState !== state) {
    return NextResponse.redirect(
      new URL("/login?error=invalid_state", req.url)
    );
  }

  // 백엔드로 code/state 전달
  const backendUrl = `${process.env.BACKEND_BASE_URL}/auth/naver/callback`;

  const backendRes = await fetch(backendUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    // ✅ 백엔드가 Set-Cookie로 세션을 내려주는 구조라면 중요:
    // - 백엔드가 api.musicbook.live 같은 다른 도메인이라면
    //   브라우저로 쿠키를 심는 방식은 "프론트 직접 호출"이 더 쉬움.
    // - 여기서는 "백엔드가 토큰/세션값을 JSON으로 주고 Next가 쿠키로 굽는" 패턴을 추천.
    body: JSON.stringify({
      code,
      state,
      redirectUri: process.env.NAVER_REDIRECT_URI,
    }),
  });

  if (!backendRes.ok) {
    return NextResponse.redirect(
      new URL("/login?error=backend_failed", req.url)
    );
  }

  // ✅ 권장 패턴: 백엔드가 accessToken(또는 sessionToken)을 JSON으로 주고
  // Next가 HttpOnly 쿠키로 굽기
  const data = await backendRes.json().catch(() => ({}));

  const res = NextResponse.redirect(new URL("/", req.url));

  if (data?.accessToken) {
    res.cookies.set("access_token", data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 정책에 맞게
    });
  }

  // state는 1회용 → 삭제
  res.cookies.delete("naver_oauth_state");

  return res;
}
