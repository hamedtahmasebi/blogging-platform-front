import NextAuth, { DefaultSession } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { api } from "./lib/api-unprotected";

declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            /**
             * By default, TypeScript merges new interface properties and overwrites existing ones.
             * In this case, the default session user properties will be overwritten,
             * with the new ones defined above. To keep the default session user properties,
             * you need to add them back into the newly declared interface.
             */
        } & DefaultSession["user"];
        accessToken: string;
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        email: z.string().email(),
                        password: z.string().min(8),
                    })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    try {
                        const res = await api.auth.login({
                            ...parsedCredentials.data,
                        });
                        return {
                            ...res.data,
                            accessToken: res.data.access_token,
                        };
                    } catch (error) {
                        return null;
                    }
                }

                return null;
            },
        }),
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.user.id = token.id;
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
    trustHost: true,
    pages: {
        signIn: "/login",
        error: "/auth/error",
    },
});
