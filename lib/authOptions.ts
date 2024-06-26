import { db } from "@/lib/db";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      authorization: { params: { scope: "openid profile email" } },
      issuer: "https://www.linkedin.com/oauth",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      async profile(profile) {
        // console.log(profile)
        return {
          id: profile.sub,
          email: profile.email,
          name: `${profile.given_name} ${profile.family_name}`,
          image: profile.picture,
        };
      },
    }),
  ],

  callbacks: {
    async session({ token, session, user }) {
      if (token && session) {
        session.user = {
          token: token.accessToken,
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
          role: token.role,
        } as {
          id: string;
          name?: string | null | undefined;
          email?: string | null | undefined;
          image?: string | null | undefined;
          token?: string | null | undefined;
          role?: string;
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      const email = token?.email || (user?.email ?? null);
      // console.log(`Email Found: ${email}`)

      const dbUser = await db.user.findFirst({
        where: {
          email: email,
        },
      });
      // console.log(`User already exists: ${dbUser}`)

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        role: dbUser.role,
      };
    },
  },

  pages: {
    signIn: "/login",
  },

  adapter: PrismaAdapter(prisma) as any,

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXT_AUTH_SECRET as any,
};

export default authOptions;
