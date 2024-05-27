'use server'

import credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";

export async function authenticate ( prevState: string | undefined , formData: FormData ) {
    try {
        await signIn('credentials', formData );
    }
    catch ( err ) {
        if ( err instanceof AuthError) {
            switch ( err.type ){
                case "CredentialsSignIn":
                    return 'Invalid credentials'
                default:
                    return "Something went wrong"
            }
        }
        throw err;
    }
}