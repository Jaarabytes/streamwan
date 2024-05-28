'use server';
import z from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt' 
import { v4 as uuidv4 } from 'uuid';

export async function authenticate (prevState : string | undefined , formData: FormData) {
    try {
        await signIn('credentials', formData);
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

const RegisterUser = z.object({
    email: z.string({invalid_type_error: "Please enter a valid email address"}),
    password: z.string({invalid_type_error: "Please enter a valid password"})
})

export async function register (prevState: string | undefined, formData: FormData) {
    const validatedFields = RegisterUser.safeParse({email: formData.get('email'), password: formData.get('password')});
    if (!validatedFields.success) return "Missing fields, failed to create account";
    const { email, password } = validatedFields.data

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = uuidv4()

    try {
        const emailExists = await sql`
        SELECT 1 FROM users WHERE email = ${email}
        `
        if (!emailExists.rows.length) {
            await sql`
            INSERT INTO users (id, email, password) IF users.email NOT EXISTS
            VALUES (${id}, ${email}, ${hashedPassword})
            `
            console.log("User created successfully")
            await signIn('credentials', formData);
        }
        else {
            console.error("User already exists")
        }
        
    }
    catch (err) {
        console.error("Database error, failed to create an account", err)
        throw new Error("Failed to create account")
    }
    redirect('/dashboard')
}