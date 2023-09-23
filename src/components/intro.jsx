import React from "react";

function Intro(){
    return(
        <div className="xl:flex block min-h-full my-5 px-5" id="home">
            <div className="relative inline-block xl:w-1/2 w-full overflow-hidden" id="Home">
                <img src="https://jomeista.github.io/streamwan/img/Homefibre.png" />
            </div>
            <div className="xl:w-1/2 w-full">
                <h1 className="md:text-[80px] text-[40px] text-center text-green-900 font-bold">Enjoy every moment with <span>Stream Fibre</span></h1>
                <p className="md:text-[30px] text-[20px] text-center text-green-700">An amazing experience awaits you at home</p>
            </div>
        </div>
    )
}
export default Intro;