'use client'

import { useState, useEffect } from "react"

export default function Finalize () {
const [ currentIndex, setCurrentIndex ] = useState(0);
const qualities = ["No more lagging", "Cooperative customer care", "Affordable prices", "Ahead of everyone"]

  useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % qualities.length);
          }, 2500);

      return () => clearInterval(intervalId)
      }, [qualities.length])

return (
        <>
            <div className='sm:my-48 px-[20%]'>
                <h1 className="text-3xl mx-5 text-green-900 font-bold">Wi-Fight us?</h1>
                <p className="text-green-900 font-bold px-5 my-3 animated-string-text">{qualities[currentIndex]}</p>       
                <div className="sm:flex sm:my-10">
                        <a href="/sign_up"> 
                        <button
                        className="block w-full p-3 my-3 sm:mx-2 sm:w-[250px] text-lg text-green-900 rounded-lg border-2 border-green-900 hover:bg-slate-100/70 transition duration:500"
                        >Schedule demo</button>
                        </a>
                        <a href="/sign_up">
                        <button
                        className="block w-full p-3 my-3 sm:mx-2 sm:w-[250px] bg-green-900 text-lg rounded-lg border-2 text-white hover:bg-green-800 transition duration:500"
                        >Get started</button>
                        </a>
                </div>
            </div>
        </>
    )
}
