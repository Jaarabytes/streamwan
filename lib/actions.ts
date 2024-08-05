'use server'

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import pool from "./db";
import { jwtVerify, JWTPayload as JoseJWTPayload, SignJWT } from "jose";
import { redirect } from 'next/navigation'

interface CustomJWTPayload extends JoseJWTPayload {
  expires: string | Date;
  [key: string]: any;
}

const secretKey = process.env.AUTH_SECRET as string;
console.log(`Secret Key is ${secretKey}`)

if ( !secretKey ) {
  console.log(`Error, secretKey is missing`)
  throw new Error("Error, secretKey is missing");
}

const key = new TextEncoder().encode(secretKey);
const SESSION_EXPIRATION = 14 * 24 * 60 * 60 * 1000;
const encoder = new TextEncoder()

export async function encrypt ( payload: any) {
    return await new SignJWT(payload).setProtectedHeader({alg: "HS256"}).setIssuedAt().setExpirationTime('14 days from now').sign(key);
}

export async function decrypt(input: string): Promise<CustomJWTPayload> {
  const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
  console.log(`Payload decoded is ${JSON.stringify(payload as CustomJWTPayload)}`)
  return payload as CustomJWTPayload;
}

export async function login (formData: FormData ) {
    try {
        const user = { email: formData.get('email'), password: formData.get('password')}
        const client = await pool.connect();
        console.log("successfully conencted to the db")
        // check if user exists in the database
        const { rows } = await client.query(`SELECT * FROM users WHERE email = $1`, [user.email])
        if ( rows.length === 0 ) return "User not found"
        const storedPassword = rows[0].password;
        console.log(`Stored password is ${storedPassword}`)
        const hashedPassword = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(user.password as string)))).map(byte => byte.toString(16).padStart(2, '0')).join('')
        console.log(`hashedPassword is ${hashedPassword}`)
        const isPasswordValid = (storedPassword == hashedPassword)
        // will encrypt this inot the session cookies.
        const userId = rows[0].id;

        if ( !isPasswordValid ) {
          console.log(`Incorrect password`);
          // find a way to return using nextjs
        }
        if ( isPasswordValid ) {
            console.log("Successful user authentication. ")
            // create session
            const expires = new Date(Date.now() + SESSION_EXPIRATION )
            const session = await encrypt({ userId, expires })

            cookies().set("session", session, { expires, httpOnly: true })
            console.log(`Successful login`)
            redirect('/dashboard')
        }
        else {
            return "Invalid Credentials"
        }
    }
    catch ( err ) {
        console.log(`Error when logging in: ${err}`)
    }
}

export async function signUp (formData: FormData ) {
    try {
        // look up user in db
        const user = { email: formData.get('email'), password: formData.get('password')}
        const client = await pool.connect();
        const { rows } = await client.query(`SELECT * FROM users WHERE email = $1`, [user.email])
        if ( rows.length > 0 ) {
          return "User already exists"
        } 
            const hashedPassword = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(user.password as string)))).map(byte => byte.toString(16).padStart(2,'0')).join('');
            console.log(`Hashed Password is ${hashedPassword}`)
            const result = await client.query(`INSERT INTO users (email, hashedPassword) VALUES ($1, $2)`, [user.email, hashedPassword])
            const userId = result.rows[0].id;
            const expires = new Date(Date.now() + SESSION_EXPIRATION )
            const session = await encrypt({ userId, expires })

            cookies().set("session", session, { expires, httpOnly: true })
            console.log("Sign up successful")
            redirect('/dashboard')
    }
    catch ( error ) {
        console.log(`Error during signup: ${error}`)
    }
}

export async function createPayment ( payment: number ) {
     try {
         // put the user id inside the jwt, then decode it later
         const session = await getSession();
         const userId = decrypt(session);
         // avoid broke people
         if ( payment <= 0 ) {
           return "Please add more money"
         }
         const client = await pool.connect()
         const { rows } = await client.query(`SELECT * FROM users WHERE id = $1`, [userId])
         if ( rows.length === 0 ) {
           return "User not found"
         }
         const result = await client.query(`INSERT INTO payments (user_id, amount, date) VALUES ($1, $2, $3) RETURNING id`, [userId, payment, new Date()])
         if ( result ) {
           console.log(`Successfully created payment`)
           return {success: true, message: "Payment created successfully", paymentId: result.rows[0].id}
         }
         console.log("Payment creation failed")
         return "Payment creation failed"
     }
     catch ( error ) {
         throw error;
     }
}

export async function fetchPayment ( userId: number ) {
  try {
      const client = await pool.connect()
      const { rows } = await client.query(`SELECT * FROM payments WHERE user_id = $1 ORDER BY date DESC`, [userId]);
      if ( rows.length === 0 ) {
        return {message: "No payments for this user"}
  }
      return rows;
  }
  catch ( error ) {
    console.log(`Error when fetching payments: ${error}`)
    return `Error when fetching payments: ${error}`
  }
}

export async function fetchMail (userId: number) {
  try {
    if  (!userId) return "Invalid session cookie"
    const client = await pool.connect();
    const { rows } = await client.query(`SELECT email FROM users WHERE id = $1`, [userId])
    if ( rows.length === 0 ) return "Seems you do not exist"
    const userMail = rows[0].email
    console.log(`User email is ${userMail}`)
    if ( userMail ) {
      return userMail
    }
    return "Failed operation"
  }
  catch ( error ) {
    console.log(`Error when fetching mail: ${error}`)
  }
}

export async function logOut () {
    // terminate the session
    cookies().set("session", "", {expires: new Date(0) })
}

export async function getSession () {
    const session = cookies().get('session')?.value;
    if ( !session ) return null;
    // session is decrypted but i only need the user id
    const decryptedSession = await decrypt(session)
    console.log(`The user id is ${decryptedSession.userId}`)
    return decryptedSession.userId 
}


export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  if (!session) return;

  try {
    const parsed = await decrypt(session) as CustomJWTPayload;
    
    if (typeof parsed.expires !== 'string' && !(parsed.expires instanceof Date)) {
      throw new Error('Invalid expires value');
    }

    const expiresDate = new Date(parsed.expires);

    if (isNaN(expiresDate.getTime())) {
      throw new Error('Invalid expiration date');
    }

    // Only update if the session is about to expire
    if (expiresDate.getTime() - Date.now() < 24 * 60 * 60 * 1000) { // Less than 1 day left
      parsed.expires = new Date(Date.now() + SESSION_EXPIRATION);
      const res = NextResponse.next();
      res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires
      });
      return res;
    }
  } catch (error) {
    console.error("Error updating session:", error);
    // Clear the invalid session
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: "",
      expires: new Date(0)
    });
    return res;
  }
}

