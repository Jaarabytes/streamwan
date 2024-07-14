// don't forget to import the navbar
import Navbar from "../ui/home/Navbar"
import Offers from "../ui/home/Offers"
import Footer from "../ui/home/Footer"


export default function PricingPage () {
    return (
        <>
            <Navbar />
            <div className="px-[13%] my-10">
                <div className="my-5">
                    <h1 className="text-[50px] font-extrabold text-green-900">Pricing</h1>
                    <p className="text-slate-800 text-lg">Small things come in great packages</p>
                </div>
                <div>
                    <Offers />
                </div>
            </div>
            <Footer />
        </>
    )
}
