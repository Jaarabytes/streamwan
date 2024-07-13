'use client'
import Navbar from "@/app/ui/home/Navbar";
import { googleAuthenticate } from '@/lib/googleAuth'
import { useFormState } from 'react-dom'


export default function Intro(){
//    const [ googleErrorMsg, googleDispatch ] = useFormState(googleAuthenticate, undefined);

    return(
        <>
        <Navbar />
        <div className="sm:flex block min-h-full my-16 px-5" id="home">
            <div className="w-full">
                <h1 className="md:text-[80px] text-[50px] text-center text-green-900 font-extrabold my-5">Fast internet For the Family!</h1>
                <p className="md:text-[20px] text-[20px] text-center text-green-800 my-16">Be it personal, family or a company, StreamWan provides <br /><span className="font-extrabold"> blazingly fast internet services
                </span> at favorable prices.</p>
                <br />
                <div className="flex justify-around px-10 sm:justify-center sm:my-16">
                      <a href="/sign_up">
                        <button
                        className="block px-6 py-2 w-full sm:w-[150px] sm:mx-3 text-lg text-green-900 rounded-xl border-2 border-green-900 hover:bg-slate-100/70 transition duration:500"
                        >Get demo</button>
                        </a>  
                        <a href="/sign_up">
                        <button
                        className="block px-7 py-2 w-full sm:w-[150px] sm:mx-3 text-lg bg-green-900 rounded-xl border-2 text-white hover:bg-green-800 transition duration:500"
                        >Buy me!
                        </button>
                        </a>
                </div>
            </div>
        </div>
        </>
    )
}
