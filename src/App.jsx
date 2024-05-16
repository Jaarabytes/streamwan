import Navbar from './components/navbar'
import './App.css'
import Intro from './components/intro'
import Offers from './components/offers'
import FAQs from './components/faq'
import Footer from './components/footer'
import Reviews from './components/reviews'
import Marketing from './components/marketing'

export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Marketing />
      <Reviews />
      <Offers />
      <FAQs />
      <Footer />
    </>
  )
}