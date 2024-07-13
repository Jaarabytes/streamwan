'use client'
export default function Finalize () {
    return (
        <>
            <div className='sm:my-48 px-[20%]'>
                <h1 className="text-3xl mx-5 text-green-900 font-bold">Wi-Fight us?</h1>
                <div className="sm:flex sm:my-16 px-5">
                    
                        <button
                        className="block w-full p-3 my-3 sm:mx-2 sm:w-[250px] text-lg text-green-900 rounded-lg border-2 border-green-900 hover:bg-slate-100/70 transition duration:500"
                        >Schedule demo</button>
                    
                        <button
                        className="block w-full p-3 my-3 sm:mx-2 sm:w-[250px] bg-green-900 text-lg rounded-lg border-2 text-white hover:bg-green-800 transition duration:500"
                        >Get started</button>
                </div>
            </div>
        </>
    )
}
