<<<<<<< HEAD
<<<<<<< HEAD
// import type { NextAuthConfig } from 'next-auth';

// export const authConfig = {
//     pages : {
//         signIn: "/login",
//     },
//     callbacks: {
//         authorized ({ auth, request: { nextUrl }}) {
//             const isLoggedIn = !!auth?.user;
//             const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//             if (isOnDashboard) {
//                 if (isLoggedIn) {
//                     return true;
//                 }
//                 else{
//                     return false;
//                 }
//             }
//             else if (isLoggedIn) {
//                 return Response.redirect(new URL('/dashboard', nextUrl));

//             }
//             return true;
//         }
//     },
//     providers: []
// } satisfies NextAuthConfig;
=======
import type { NextAuthConfig } from 'next-auth';
=======
// import type { NextAuthConfig } from 'next-auth';
>>>>>>> 0bb4b17 (hehe git errors you know.)

// export const authConfig = {
//     pages : {
//         signIn: "/login",
//     },
//     callbacks: {
//         authorized ({ auth, request: { nextUrl }}) {
//             const isLoggedIn = !!auth?.user;
//             const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//             if (isOnDashboard) {
//                 if (isLoggedIn) {
//                     return true;
//                 }
//                 else{
//                     return false;
//                 }
//             }
//             else if (isLoggedIn) {
//                 return Response.redirect(new URL('/dashboard', nextUrl));

<<<<<<< HEAD
            }
            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;
>>>>>>> 028dfa3 (feat: add auth)
=======
//             }
//             return true;
//         }
//     },
//     providers: []
// } satisfies NextAuthConfig;
>>>>>>> 0bb4b17 (hehe git errors you know.)
