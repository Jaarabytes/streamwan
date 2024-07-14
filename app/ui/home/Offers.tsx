'use client'
export default function Offers() {
  const items = [
    {
      name: "Basic",
      speed: "5 Mbps",
      price: 3000,
      qualities: [
        "Fast web browsing",
        "UHD movie and music streaming",
        "UHD TV programming",
      ],
    },
    {
      name: "Family",
      speed: "15 Mbps",
      price: 4500,
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
      price: 6000,
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
      price: 7500,
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
          <p className="my-5 px-3 text-lg"><b>{elem.price}</b> KES per month</p>
          <hr className="my-5" />
          <a href="/sign_up"> 
          <button
          className={`m-2 px-5 py-3 w-3/4 rounded-lg text-white text-2xl ${elem.name === 'Basic' ? 
          "bg-green-700 hover:bg-green-900 transition duration:500" : elem.name === "Family" ? 
          "bg-pink-500 hover:bg-pink-700 transition duration:500" : elem.name === "Bronze" ? 
          "bg-amber-500 hover:bg-amber-600 transition duration:500" : 
          "bg-blue-900 hover:bg-slate-800 transition duration:500"}`}>Purchase</button>
          </a>
        </div>
      ))}
    </div>
  );
}
