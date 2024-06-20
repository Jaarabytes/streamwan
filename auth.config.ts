import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import Github from "next-auth/providers/github";
// add stripe for payments
//fix sign up (both normal and for google)

const providers: Provider[] = [
    Github,
    Credentials({
      credentials: { password: { label: "Password", type: "password" } },
      authorize(c) {
        if (c.password !== "password") return null
        return {
          id: "test",
          name: "Test User",
          email: "test@example.com",
        }
      },
    }),
  ]

export const providerMap = providers.map((provider) => {
    if (typeof provider == "function") {
        const providerData = provider();
        return { id: providerData.id, name: providerData.name}

    }
    else {
        return {id: provider.id, name: provider.name}
    }
})

export const authConfig = {
    pages : {
        signIn: "/login"
    },
    callbacks : {
        authorized ( {auth, request : { nextUrl } } ) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

            if ( isOnDashboard ) {
                if ( isLoggedIn ) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }
            return true;
        }
    },
    providers: [Google]
} satisfies NextAuthConfig;