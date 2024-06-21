// This should hold multiple components similar to App.jsx, thank you

import Footer from "@/app/ui/home/Footer";
import Intro from "@/app/ui/home/Intro";
import Marketing from "@/app/ui/home/Marketing";
import Reviews from "@/app/ui/home/Reviews";
import Finalize from "@/app/ui/home/Finalize";

export default function HomePage () {

// fix second image in marketing component
  return (
    <>
      <div>
        <Intro />
        <Marketing />
        <Reviews />
        <Finalize />
        <Footer />
      </div>
    </>
  )
}