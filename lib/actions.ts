'use server'

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.AUTH_SECRET as string;
const key = new TextEncoder().encode(secretKey);

export async function encrypt ( payload: any) {
    return await new SignJWT(payload).setProtectedHeader({alg: "HS256"}).setIssuedAt().setExpirationTime('14 days from now').sign(key);
}

export async function decrypt (input: string) {
    const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"]});
    return payload;
}

export async function login (formData: FormData ) {
    try {
        const user = { email: formData.get('email'), password: formData.get('password')}

        // create session
        const expires = new Date(Date.now() + 1209600 * 1000 ) // 14 days in microseconds
        const session = await encrypt({ user, expires })

        cookies().set("session", session, { expires, httpOnly: true })
    }
    catch ( err ) {
        throw err;
    }
}

export async function logOut () {
    // terminate the session
    cookies().set("session", "", {expires: new Date(0) })
}

export async function getSession () {
    const session = cookies().get('session')?.value;
    if ( !session ) return null;
    return await decrypt(session);
}

export async function updateSession ( request: NextRequest ) {
    const session = request.cookies.get('session')?.value;
    if ( !session ) return null;

    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 1209600 * 1000 )
    const res = NextResponse.next();

    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires as number
    })

    return res;
}