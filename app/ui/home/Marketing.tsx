'use client'

import Image from "next/image";
export default function Marketing () {
  return (
    <>
  <div className="bg-gradient-to-b from-white to-green-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-20 sm:mb-32">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 mb-8 sm:mb-0 sm:pr-8">
                <h2 className="text-3xl sm:text-4xl text-green-900 font-extrabold mb-4 animate-fade-in-left">Say Goodbye to Lagging</h2>
                <p className="text-lg sm:text-xl text-green-800 mb-6 animate-fade-in-left delay-200">
                  Tired of slow internet? Upgrade to our lightning-fast Wi-Fi for seamless streaming and lag-free gaming.
                  Join thousands of satisfied customers and transform your online experience now!
                </p>
                <a href="/sign_up" className="inline-block">
                  <button className="px-8 py-3 bg-green-900 text-white text-lg font-semibold rounded-lg hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 animate-fade-in-up delay-400">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="bg-green-200 rounded-lg shadow-lg p-4 animate-fade-in-right">
                  <svg className="w-full h-64 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                  </svg>
                  <p className="text-center text-green-800 mt-2">A Happy family enjoying lag-free internet</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row-reverse items-center">
              <div className="w-full sm:w-1/2 mb-8 sm:mb-0 sm:pl-8">
                <h2 className="text-3xl sm:text-4xl text-green-900 font-extrabold mb-4 animate-fade-in-right">Cooperative Customer Care</h2>
                <p className="text-lg sm:text-xl text-green-800 mb-6 animate-fade-in-right delay-200">
                  Don&apost settle for less. StreamWan services provide excellent support before, during, and after installation.
                  We take full responsibility for problems encountered along the way.
                </p>
                <a href="/sign_up" className="inline-block">
                  <button className="px-8 py-3 bg-green-900 text-white text-lg font-semibold rounded-lg hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 animate-fade-in-up delay-400">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="bg-green-200 rounded-lg shadow-lg p-4 animate-fade-in-left">
                  <svg className="w-full h-64 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                  <p className="text-center text-green-800 mt-2">Customer care staff response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
      </>
  );
};
