// don't forget to import the navbar

import Navbar from "@/app/ui/Navbar";
import Offers from "@/app/ui/Offers";
import Footer from "@/app/ui/Footer";

export default function PricingPage () {

// Add the offers component here
    return (
        <>
            <Navbar />
            <div className="px-[13%] my-10">
                <div className="my-5">
                    <h1 className="text-[50px] font-extrabold text-green-900">Pricing</h1>
                    <p className="text-slate-500 text-lg">Small things come in great packages</p>
                </div>
                <div>
                    <Offers />
                    {/* Place the offers component here */}
                    {/* Add relevant icons to the packages */}
                </div>
            </div>
            <Footer />
        </>
    )
}