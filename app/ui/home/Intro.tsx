'use client'
import Navbar from "@/app/ui/home/Navbar";
import Image from 'next/image'
export default function Intro(){
    return(
        <>
   <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-green-900 mb-6 animate-fade-in-down">
              Fast Internet For the Family!
            </h1>
            <p className="text-xl md:text-2xl text-green-800 mb-12 animate-fade-in-up">
              Be it personal, family or a company, StreamWan provides{" "}
              <span className="font-extrabold">blazingly fast internet services</span>{" "}
              at favorable prices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/sign_up" className="inline-block">
                <button className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-green-900 bg-white border-2 border-green-900 rounded-full hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                    Get Demo
                  </span>
                </button>
              </a>
              <a href="/sign_up" className="inline-block">
                <button className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-green-900 rounded-full hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Buy Now!
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <Image className="mx-auto" height={900} width={1000} src="/Homefibre.png" alt="A Happy family enjoying lag-free internet"
        ></Image>
      </div>        
    </>
    )
}
