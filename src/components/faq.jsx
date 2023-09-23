import React, { useState } from "react";

function FAQs() {
  const items = [
    {
      question: "Why choose StreamWan",
      answer:
        "24/7 customer service with no call centre- your call goes directly through. In case of downtime, our team will work on same-day resolution.",
    },
    {
      question: "What are my speed options",
      answer:
        "Your Internet usage will determine which speed will be best for your home or business. The number of devices, amount of streaming and downloading will all factor into the speed that you will need. For reference, Netflix recommends an Internet download speed of at least 5Mbps to stream HD videos.",
    },
    {
      question: "What happens if my speeds aren't fast enough",
      answer:
        "Sometimes slow speeds are because of equipment malfunction or there are too many people using your connection. Restarting your router is a quick solution to slow speeds. Test your Internet speed using these free websites.",
    },
    {
      question: "What happens if there is a problem with my internet connection",
      answer:
        "Unfortunately, occasional Internet issues are inevitable. When an Internet Outage occurs, contact us through the technical support phone line.",
    },
    {
      question: "What additional fees can I expect?",
      answer: "Besides the recurring monthly fees, an installation fee is charged.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1); // State to track the index of the open question, -1 means none are open.

  const handleQuestionClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index); // Toggle the open/close state
  };

  return (
    <div className="flex item-center px-5" id="FAQs">
    <div className="py-[100px] border-slate-700 rounded text-center w-full">
      {items.map((elem, index) => (
        <div key={elem.question}>
          <div
            className="transition rounded text-lg sm:text-xl text-green-900 font-bold sm:h-[70px] h-[80px] cursor-pointer hover:bg-gray-300 duration-500"
            onClick={() => handleQuestionClick(index)}
          >
            {elem.question}
            {openIndex !== index ? <i className="fa-solid fa-chevron-down px-5"></i> : <i className="fa-solid fa-chevron-up px-5"></i>}
          </div>
          
          {openIndex === index && (
            <div className="rounded text-lg text-green-800 bg-gray-300">{elem.answer}</div>
          )}
          <hr/>
        </div>
      ))}
    </div>
    </div>
  );
}

export default FAQs;