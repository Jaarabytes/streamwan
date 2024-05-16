import React from "react";
import "./components.css";
import { useInView } from 'react-intersection-observer';

export default function Offers() {
  const {ref, inView} = useInView({
    rootMargin:"-300px 0px -300px 0px",
    triggerOnce:true
  });

  const items = [
    {
      name: "Basic",
      speed: "3 Mbps",
      price: {
        sharing: "2,000 KES/ mo",
        dedicated: "3,000 KES/ mo",
      },
      qualities: [
        "Fast web browsing",
        "UHD movie and music streaming",
        "UHD TV programming",
        "Medium size file downloads",
        "Suitable for 1-3 users",
      ],
    },
    {
      name: "Family",
      speed: "5 Mbps",
      price: {
        sharing: "3500 KES/mo",
        dedicated: "4500 KES/mo",
      },
      qualities: [
        "Fast web browsing",
        "SD Movie & Music Streaming",
        "SD TV programming",
      ],
    },
    {
      name: "Bronze",
      speed: "10 Mbps",
      price: {
        sharing: "4500 KES/mo",
        dedicated: "6000 KES/mo",
      },
      qualities: [
        "Fast web browsing",
        "SD Movie & Music Streaming",
        "HD TV programming",
        "Multiple device Streaming",
        "Superfast video downloads",
        "CCTV devices capability",
      ],
    },
    {
      name: "Premium",
      speed: "20 Mbps",
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
    <div className="grid md:grid-cols-4 gap-4 px-5 min-h-full sm:grid-cols-2 grid-cols-1" ref={ref} id="offers">
      {items.map((elem) => (
        <div key={elem.name} className={`rounded-lg border-gray-800 text-center shadow-lg py-5 kuu ${inView ? 'kuu-seen' : ""}`}>
          <p className={`text-white text-2xl ${elem.name === 'Basic' ? "bg-green-700" : elem.name === "Family" ? "bg-pink-500" : elem.name === "Bronze" ? "bg-amber-500" : "bg-blue-900"}`}>{elem.name}</p>
          <p className="text-green-900 bg-white font-bold text-xl">{elem.speed}</p>
          <ul key={elem.name} className="h-80">
            {elem.qualities.map((element) => (
              <li key={element} className="py-3 list-image[url(../../circle-check-regular.svg)]">{element}</li>
            ))}
          </ul>
          <hr />
          <p>Sharing: {elem.price.sharing}</p>
          <p>Dedicated: {elem.price.dedicated}</p>
          <hr />
          <button className={`my-2 p-2 juu text-white text-2xl ${elem.name === 'Basic' ? "bg-green-700" : elem.name === "Family" ? "bg-pink-500" : elem.name === "Bronze" ? "bg-amber-500" : "bg-blue-900"}`}>Purchase</button>
        </div>
      ))}
    </div>
  );
}

