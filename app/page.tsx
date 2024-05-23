// This should hold multiple components similar to App.jsx, thank you

import Footer from "@/app/ui/Footer";
import Intro from "@/app/ui/Intro";
import Marketing from "@/app/ui/Marketing";
import Reviews from "@/app/ui/Reviews";
import Finalize from "@/app/ui/Finalize";

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