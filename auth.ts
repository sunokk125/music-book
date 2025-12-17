// auth.ts
import NextAuth, { type NextAuthOptions } from "next-auth";
import NaverProvider from "next-auth/providers/naver";

export const authOptions: NextAuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // 최초 로그인 시
      if (account && profile) {
        // @ts-ignore - 네이버는 profile.response.* 구조
        const resp = profile.response ?? {};

        token.accessToken = account.access_token;
        token.naverId = resp.id;
        token.name = resp.name ?? token.name;
        token.email = resp.email ?? token.email;
        console.log("UserId      : " + profile.email);
        console.log("AccessToken : " + token.accessToken);
        console.log("NaverID     : " + token.naverId);
        console.log("Name        : " + token.name);
        console.log("Email       : " + token.email);
      }
      return token;
    },
    async session({ session, token }) {
      // 클라이언트에서 쓸 수 있도록 세션에 옮겨담기
      if (session.user) {
        // @ts-ignore
        session.user.id = token.naverId;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      // @ts-ignore
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
