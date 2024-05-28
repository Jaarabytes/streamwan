import Navbar from "@/app/ui/Navbar"
import Footer from "@/app/ui/Footer"
import SignUpForm from "@/app/ui/SignupForm"
// 'use server'

// Don't forget to add google auth xzz nerds reposiroty (it's starred)
// import { redirect } from "next/navigation"

// export async function Trial () {
//     redirect(`/sign_in`)
// }
export default function TrialPage () {
    return (
        <>
            <Navbar />
            <div className="my-5">
                <h1 className="my-5 text-3xl text-green-900">Hello, this is the sign up page!</h1>
                <SignUpForm />
            </div>
            <Footer />
        </>
    )
}