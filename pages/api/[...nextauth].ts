import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
// deal with middleware, getdata, auth config, sign in and sign out typescript functions and components
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ]
})