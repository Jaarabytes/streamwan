import React from "react";

function Footer() {
  return (
    <footer id="contact" className="min-h-1/2 shadow-2xl bg-green-600 text-white grid md:grid-cols-3 grid-cols-1 gap-3 text-center p-5">
      <div>
        <h2 className="text-2xl font-bold">About us:</h2>
        <p>We are a Green Internet Service Provider based in Kenya focused on reliable internet connectivity powered by renewable energy. We are committed to uptime, same-day installation, exemplary customer service, and after-sale support.</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Contact</h3>
        <p><i className="fa-solid fa-phone fa-shake text-xl pr-4"></i>+254703605398</p>
        <p><i className="fa-solid fa-envelope text-xl pr-4"></i>xh3rking96@gmail.com</p>
      </div>
      <div className="inline">
        <h1 className="text-2xl font-bold">Links:</h1>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/xh3rking"><i className=" text-xl pr-4 fab fa-twitter"></i></a>
        <a target="_blank" rel="noreferrer" href="https://facebook.com/shamgarlamarke"><i className="fab fa-facebook text-xl pr-4"></i></a>
        <a target="_blank" rel="noreferrer" href="https://youtu.be/dQw4w9WgXcQ?si=b8rWPl0lqxxSPXWD"><i className="fab fa-youtube text-xl pr-4"></i></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/jaarabytes"><i className="fab fa-github text-xl pr-4"></i></a>
      </div>
    </footer>
  )
}

export default Footer;
