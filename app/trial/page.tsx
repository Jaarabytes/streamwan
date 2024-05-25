'use server'

// Don't forget to add google auth xzz nerds reposiroty (it's starred)
import { redirect } from "next/navigation"

export async function Trial () {
    redirect(`/sign_in`)
}
