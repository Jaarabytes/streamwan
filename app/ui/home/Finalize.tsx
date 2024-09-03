'use client'

import { useState, useEffect } from "react"

export default function Finalize() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const qualities = ["No more lagging", "Cooperative customer care", "Affordable prices", "Ahead of everyone"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % qualities.length);
    }, 2600);

    return () => clearInterval(intervalId);
  }, [qualities.length]);

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-6 animate-fade-in-down">
            Wi-Fight us?
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-green-800 mb-8 h-8 animate-fade-in-up">
            {qualities[currentIndex]}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/sign_up" className="inline-block">
              <button className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-green-900 bg-white border-2 border-green-900 rounded-full hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Schedule Demo
                </span>
              </button>
            </a>
            <a href="/sign_up" className="inline-block">
              <button className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-green-900 rounded-full hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Get Started
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
