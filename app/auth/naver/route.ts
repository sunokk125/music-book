import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function makeState() {
  return crypto.randomBytes(16).toString("hex");
}

export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get("mode") ?? "login";

  const clientId = process.env.NAVER_CLIENT_ID!;
  const redirectUri = process.env.NAVER_REDIRECT_URI!;
  const state = makeState();

  const authUrl = new URL("https://nid.naver.com/oauth2.0/authorize");
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("state", state);

  const res = NextResponse.redirect(authUrl);

  // CSRF 방지용 state를 HttpOnly 쿠키로 저장
  res.cookies.set("naver_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 3,
  });

  res.cookies.set("naver_oauth_mode", mode, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 3,
  });

  return res;
}
