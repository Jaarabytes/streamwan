// TO BE placed in its own route, similar to wazo.today
import Footer from "@/app/ui/home/Footer";

export default function FAQs() {
  const items = [
    {
      question: "Why choose StreamWan?",
      answer:
        "24/7 customer service with no call centre- your call goes directly through. In case of downtime, our team will work on same-day resolution.",
    },
    {
      question: "What are my speed options?",
      answer:
        "Your Internet usage will determine which speed will be best for your home or business. The number of devices, amount of streaming and downloading will all factor into the speed that you will need. For reference, Netflix recommends an Internet download speed of at least 5Mbps to stream HD videos.",
    },
    {
      question: "What happens if my speeds aren't fast enough?",
      answer:
        "Sometimes slow speeds are because of equipment malfunction or there are too many people using your connection. Restarting your router is a quick solution to slow speeds. Test your Internet speed using these free websites.",
    },
    {
      question: "What happens if there is a problem with my internet connection?",
      answer:
        "Unfortunately, occasional Internet issues are inevitable. When an Internet Outage occurs, contact us through the technical support phone line.",
    },
    {
      question: "What additional fees can I expect?",
      answer: "Besides the recurring monthly fees, an installation fee is charged.",
    },
    {
      question: "How can I get started with StreamWan?",
      answer: "To get started with StreamWan, simply sign up for demo on our website and begin exploring the possibilities of transforming your home or company's efficiency.",
    },
    {
      question: "Does StreamWan provide customer support?",
      answer: "Yes, StreamWan offers dedicated customer support to assist users with any questions, technical issues, or guidance they may need while using it.",
    },
  ];

  return (
    <>
    <div className="px-5 sm:px-[10%]">
      <h1 className="text-green-900 font-bold text-3xl m-10">Frequently asked questions: </h1>
      <div className="sm:grid sm:grid-rows-4 sm:grid-flow-col">
      {items.map((item, index) => (
        <div key={index} className="m-10">
          <h4 className="text-lg my-5 font-bold">{item.question}</h4>
          <p className="text-green-900">{item.answer}</p>
        </div>
      ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
