import React from "react";

// Add relevant links when going full stack bozo
export default function Footer() {
  return (
    <>
    <div>
    <div id="contact" className="min-h-1/2 shadow-2xl bg-green-900 text-white text-center flex justify-around pt-40 pb-28 px-80">
      <h1 className="text-xl font-extrabold">StreamWan</h1>
      <div>
        <h3 className="text-lg font-bold text-slate-300">PRODUCT:</h3>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes">Pricing</a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes" className="block">FAQs</a>
      </div>
      <div>
        <h2 className="text-lg font-bold text-slate-300">ABOUT:</h2>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes">Privacy</a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes" className="block">Company</a>
        {/* <p>We are a Green Internet Service Provider based in Kenya focused on reliable internet connectivity powered by renewable energy. We are committed to uptime, same-day installation, exemplary customer service, and after-sale support.</p> */}
      </div>
      <div className="block">
        <h1 className="text-lg font-bold text-slate-300">CONTACT:</h1>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes">Twitter</a>
        <a target="_blank" rel="noreferrer" href="mailto:xavierandole@gmail.com" className="block">Mail</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/jaarabytes">Github</a>
      </div>
      <div className="block">
        <h1 className="text-lg font-bold text-slate-300">LEGAL:</h1>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jaarabytes">Terms of service</a>
        <a target="_blank" rel="noreferrer" href="mailto:xavierandole@gmail.com" className="block">Privacy policy</a>
      </div>
      </div>
      <footer className="text-center bg-green-900 text-slate-400 pb-10">© Copyright 2024 StreamWan. All Rights Reserved.</footer>
      </div>
    </>
  )
}