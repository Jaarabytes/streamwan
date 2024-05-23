import React from "react";

// Add relevant links when going full stack bozo
export default function Footer() {
  return (
    <>
    <div>
    <div id="contact" className="min-h-1/2 shadow-2xl bg-green-900 text-white text-center sm:flex justify-around sm:pt-40 sm:pb-28 sm:px-80 py-10">
      <h1 className="text-xl font-extrabold my-5">StreamWan</h1>
      <div>
        <h3 className="text-lg font-bold text-slate-300 mt-5">PRODUCT:</h3>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes" className="block my-3">Pricing</a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes"  className="block my-3">FAQs</a>
      </div>
      <div>
        <h2 className="text-lg font-bold text-slate-300 mt-5">ABOUT:</h2>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes" className="block my-3">Privacy</a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes" className="block my-3">Company</a>
      </div>
      <div className="block">
        <h1 className="text-lg font-bold text-slate-300 mt-5">CONTACT:</h1>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes" className="block my-3">Twitter</a>
        <a target="_blank" rel="noreferrer" href="mailto:xavierandole@gmail.com" className="block my-3">Mail</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/jaarabytes" className="block my-3">Github</a>
      </div>
      <div className="block">
        <h1 className="text-lg font-bold text-slate-300 mt-5">LEGAL:</h1>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes" className="block my-3">Terms of service</a>
        <a target="_blank" rel="noreferrer" href="mailto:xavierandole@gmail.com" className="block my-3">Privacy policy</a>
      </div>
      </div>
      <footer className="text-center bg-green-900 text-slate-400 pb-10">© Copyright 2024 StreamWan. All Rights Reserved.</footer>
      </div>
    </>
  )
}