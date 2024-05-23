

export default function Finalize () {
    const builtFor = ["families", "companies", "households", ""]
    // add relevant href links
    return (
        <>
            <div className='sm:my-48'>
                {builtFor.map((element, index) => (
                    // Add carousel animation similar to wazo but moves horizontally
                    <span key={index}></span>
                ))}
                <h1 className="text-2xl text-green-900 font-bold">Ready for faster speeds?</h1>
                <button
                 className="block w-full sm:w-[150px] text-lg text-green-900 rounded-xl border-2 border-green-900 hover:bg-slate-200 transition duration:500"
                 style={{
                    paddingBlock: "10px",
                    paddingInline: "30px"
                }}
                >Schedule demo</button>
                <button
                 className="w-full sm:w-1/4 bg-green-900 my-5 text-xl rounded-lg text-white hover:bg-green-800 transition duration:500"
                 style={{
                     paddingBlock: "10px",
                     paddingInline: "30px"
                 }}
                >Get started</button>
            </div>
        </>
    )
}