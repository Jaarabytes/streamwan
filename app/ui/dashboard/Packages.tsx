'use client'
import { toast } from 'react-toastify'
import { PaystackConsumer } from 'react-paystack';
export default function Packages() {

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
    const publicKey = 'pk_live_9999378c83331abc0c642f96d2457a5f88969934';
    const config = { reference: (new Date()).getTime().toString(), email: 'xh3rking96@gmail.com', currency: "KES", publicKey: publicKey, amount: 2000 * 100 }
    const onSuccess = () => toast.success("Payment sucessful")
    const onClose = () => toast.error("uWu, please don't give up")
    const componentProps = { ...config, text: 'Paystack configuration', onSuccess, onClose };
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
          <PaystackConsumer {...componentProps}>{({initializePayment}) =>
          <button onClick={() => initializePayment(onSuccess, onClose)} 
           className={`m-2 px-5 py-3 w-3/4 rounded-lg text-white text-2xl ${elem.name === 'Basic' ? 
          "bg-green-700 hover:bg-green-900 transition duration:500" : elem.name === "Family" ? 
          "bg-pink-500 hover:bg-pink-700 transition duration:500" : elem.name === "Bronze" ? 
          "bg-amber-500 hover:bg-amber-600 transition duration:500" : 
          "bg-blue-900 hover:bg-slate-800 transition duration:500"}`}>Purchase</button>}</PaystackConsumer>
        </div>
      ))}
    </div>
  );
}
