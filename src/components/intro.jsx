import React from "react";

function Intro(){
    return(
        <div className="flex min-h-full mt-5 px-5">
            <div className="relative inline-block w-1/2 overflow-hidden">
                {/* INSERT IMAGE HERE */}
                <img src="https://jomeista.github.io/streamwan/img/Homefibre.png" />
            </div>
            <div className="w-1/2">
                <h1 className="text-[80px] text-green-900 font-bold">Enjoy every moment with <span>Stream Fibre</span></h1>
                <p className="text-[20px] text-green-700">An amazing experience awaits you at home</p>
            </div>
        </div>
    )
}
export default Intro;