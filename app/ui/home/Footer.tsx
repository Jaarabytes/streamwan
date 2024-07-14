import Link from "next/link"


export default function Footer() {
  return (
    <>
    <div>
    <div id="contact" className="min-h-1/2 shadow-2xl bg-green-900 text-white text-center sm:flex justify-around sm:pt-40 sm:pb-28 sm:px-80 py-10">
      <h1 className="text-xl font-extrabold my-5"><a href="/">StreamWan</a></h1>
      <div>
        <h3 className="text-lg font-bold text-slate-300 mt-5">PRODUCT:</h3>
        <Link href={`/pricing`}  className="block my-3">Pricing</Link>
        <Link href={`/faqs`}   className="block my-3">FAQs</Link>
      </div>
      <div>
        <h2 className="text-lg font-bold text-slate-300 mt-5">ABOUT:</h2>
        <Link href={`/privacy`} className="block my-3">Privacy</Link>
        <Link href={`/faqs`} className="block my-3">Company</Link>
      </div>
      <div className="block">
        <h1 className="text-lg font-bold text-slate-300 mt-5">CONTACT:</h1>
        <Link href="https://twitter.com/jaarabytes" className="block my-3">Twitter</Link>
        <Link href="mailto:xh3rking96@gmail.com" className="block my-3">Mail</Link>
        <Link href="https://github.com/jaarabytes" className="block my-3">Github</Link>
      </div>
      <div className="block">
        <h1 className="text-lg font-bold text-slate-300 mt-5">LEGAL:</h1>
        <Link href={`/privacy`}  className="block my-3">Terms of service</Link>
        <Link href={`/privacy`}  className="block my-3">Privacy policy</Link>
      </div>
      </div>
      <footer className="text-center bg-green-900 text-slate-400 pb-10">© 2024 StreamWan, Inc.</footer>
      </div>
    </>
  )
}
