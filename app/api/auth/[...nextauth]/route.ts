// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/auth"; // 위 코드가 들어있는 파일

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
