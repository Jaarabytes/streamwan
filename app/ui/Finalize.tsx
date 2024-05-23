'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Finalize () {
    const builtFor = ["families", "companies", "households"]
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => ( prevIndex + 1 ) %  builtFor.length)
        }, 2000);

        return () => clearInterval(interval)
    }, [])
    // add relevant href links
    return (
        <>
            <div className='sm:my-48 px-[20%]'>
                <h1 className="text-3xl mx-5 text-green-900 font-bold">Wi-Fight us?</h1>
                {/* {builtFor.map((element, index) => (
                    // Add carousel animation similar to wazo but moves horizontally
                    <div
                    className="flex items-center whitespace no-wrap transition-transform duration-500"
                    style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                    <span key={index}
                    style={{transform: `translateX(${(index - currentIndex) * 100}%)`}}
                    >
                        {builtFor[index]}
                    </span>
                    </div>
                ))} */}
                <div className="sm:text-center sm:flex sm:my-16 px-5">
                    <Link href={`/trial`}>
                        <button
                        className="block w-full sm:w-[250px] text-lg text-green-900 rounded-xl border-2 border-green-900 hover:bg-slate-100/70 transition duration:500"
                        style={{
                            paddingBlock: "10px",
                            paddingInline: "10px"
                        }}
                        >Schedule demo</button>
                    </Link>


                    <Link href={`/sign_in`}>
                        <button
                        className="mx-5 block w-full sm:w-[250px] bg-green-900 text-lg rounded-lg text-white hover:bg-green-800 transition duration:500"
                        style={{
                            paddingBlock: "10px",
                            paddingInline: "10px"
                        }}
                        >Get started</button>
                    </Link>
                </div>
            </div>
        </>
    )
}