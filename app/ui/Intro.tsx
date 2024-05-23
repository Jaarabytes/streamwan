import Link from "next/link";
import Navbar from "@/app/ui/Navbar";

export default function Intro(){
    return(
        <>
        <Navbar />
        <div className="sm:flex block min-h-full my-16 px-5" id="home">
            {/* <div className="relative inline-block xl:w-1/2 w-full overflow-hidden" id="Home"> */}
                {/* <img src="https://jomeista.github.io/streamwan/img/Homefibre.png" /> */}
            {/* </div> */}
            <div className="w-full">
                <h1 className="md:text-[80px] text-[40px] text-center text-green-900 font-extrabold my-5">Fast internet For the Family!</h1>
                <p className="md:text-[20px] text-[20px] text-center text-green-700 my-16">Be it personal, family or a company, StreamWan provides <br /><span className="font-bold"> blazingly fast internet services
                </span> at favorable prices.</p>
                <br />
                <div className="sm:text-center sm:flex sm:justify-center sm:my-16 px-5">
                    <Link href={`/trial`}>
                        <button
                        className="block w-full sm:w-[150px] text-lg text-green-900 rounded-xl border-2 border-green-900 hover:bg-slate-100/70 transition duration:500"
                        style={{
                            paddingBlock: "10px",
                            paddingInline: "30px"
                        }}
                        >Get demo</button>
                    </Link>

                    <Link href={`/sign_in`}>
                        <button 
                        className="block w-full sm:w-[150px] sm:mx-5 bg-green-900 text-lg rounded-xl text-white hover:bg-green-800 transition duration:500"
                        style={{
                            paddingBlock: "10px",
                            paddingInline: "30px"
                        }}
                        // href=''
                        >Buy me!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
