// import type { NextAuthConfig } from 'next-auth'
// import NextAuth from 'next-auth';
// import Google from "next-auth/providers/google"
// import Github from "next-auth/providers/github"

// export const authConfig = {
//     pages : {
//         // User is redirected to home page if unauthenticated
//         signIn: '/'
//     },
//     callbacks: {
//         authorized ( { auth, request: { nextUrl } } ) {
//             const isLoggedIn = !!auth?.user;
//             const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//             if ( isOnDashboard ) {
//                 if ( isLoggedIn ) {
//                     return true;
//                 }
//                 else {
//                     return false;
//                 } // users are redirected to the home page
//             } else if ( isLoggedIn ) {
//                 return Response.redirect(new URL('/dashboard', nextUrl ));
//             }
//             return true;
//         }
//     },
//      providers: [
//      ],
// } satisfies NextAuthConfig;
