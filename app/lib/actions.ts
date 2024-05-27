'use server'

import credentials from "next-auth/providers/credentials";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate (prevState : string | undefined , formData: FormData) {
    try {
        const email = formData.get("email");
        const password = formData.get("password");
        await signIn('credentials', {email, password});
    }
    catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid Credentials"
                default:
                    return "Something went wrong"
            }
        }
        throw error;
    }
}