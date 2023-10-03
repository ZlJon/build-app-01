import { pool } from "../../../../../config/db";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("이메일과 비밀번호를 입력해주세요.");
        }
        let member = await pool.query(
          `select * from members where email = "${credentials.email}" `
        );
        member = member[0];

        if (!member || !member?.password) {
          throw new Error("등록되지 않은 계정입니다");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          member.password
        );

        if (!passwordMatch) {
          throw new Error("비밀번호가 일치하지 않습니다.");
        }
        return member;
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
