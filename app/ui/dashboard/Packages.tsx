'use client'
// use this please
import { useInsertionEffect } from "react";
import Link from 'next/link';
export default function Packages() {
//   const {ref, inView} = useInView({
//     rootMargin:"-300px 0px -300px 0px",
//     triggerOnce:true
//   });

  const items = [
    {
      name: "Basic",
      speed: "5 Mbps",
      price: {
        sharing: "2,000 KES/ mo",
        dedicated: "3,000 KES/ mo",
      },
      qualities: [
        "Fast web browsing",
        "UHD movie and music streaming",
        "UHD TV programming",
      ],
    },
    {
      name: "Family",
      speed: "15 Mbps",
      price: {
        sharing: "3500 KES/mo",
        dedicated: "4500 KES/mo",
      },
      qualities: [
        "Fast web browsing",
        "SD Movie & Music Streaming",
        "Medium size file downloads",
        "Suitable for 1-3 users",
      ]
    },
    {
      name: "Bronze",
      speed: "50 Mbps",
      price: {
        sharing: "4500 KES/mo",
        dedicated: "6000 KES/mo",
      },
      qualities: [
        "Fast web browsing",
        "SD Movie & Music Streaming",
        "Multiple device Streaming",
        "Superfast video downloads",
        "CCTV devices capability",
      ],
    },
    {
      name: "Premium",
      speed: "100 Mbps",
      price: {
        sharing: "7500 KES/mo",
        dedicated: "10000 KES/mo",
      },
      qualities: [
        "Fast web browsing",
        "UHD Movie & Music Streaming",
        "UHD TV programming",
        "Multiple device Streaming",
        "Superfast video downloads",
        "CCTV devices capability",
      ],
    },
  ];


//   FIX THE REACT INTERSECTION OBSERVER
// I am fixing right now
  return (
    <div className="grid md:grid-cols-4 gap-4 px-5 min-h-full sm:grid-cols-2 grid-cols-1 mb-10">
      {items.map((elem) => (
        <div key={elem.name} className={`rounded-lg border-gray-800 shadow-lg py-5`}>
          <p className={`text-white px-3 text-2xl ${elem.name === 'Basic' ? "bg-green-700" : elem.name === "Family" ?
           "bg-pink-500" : elem.name === "Bronze" ? "bg-amber-500" : "bg-blue-900"}`}>{elem.name}</p>
          <p className="text-green-900 font-bold text-xl px-3">{elem.speed}</p>
          <ul key={elem.name} className="h-80">
            {elem.qualities.map((element, index) => (
                <>
                <li key={index} className="p-3">{element}</li>
              </>
            ))}
          </ul>
          <hr />
          <p className="mt-5 px-3">Sharing: {elem.price.sharing}</p>
          <p className="mb-5 px-3">Dedicated: {elem.price.dedicated}</p>
          <hr className="my-5" />
          <Link href={`/trial`}>
          <button className={`m-2 px-5 py-3 w-3/4 rounded-lg text-white text-2xl ${elem.name === 'Basic' ? 
          "bg-green-700 hover:bg-green-900 transition duration:500" : elem.name === "Family" ? 
          "bg-pink-500 hover:bg-pink-700 transition duration:500" : elem.name === "Bronze" ? 
          "bg-amber-500 hover:bg-amber-600 transition duration:500" : 
          "bg-blue-900 hover:bg-slate-800 transition duration:500"}`}>Purchase</button>
          </Link>
        </div>
      ))}
    </div>
  );
}