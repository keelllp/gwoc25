import Hero from "./components/Hero"
import CustomerFavorites from "./components/CustomerFavorites"
import Mission from "./components/Mission"
// import OurCreations from "./components/OurCreations"
import CustomerReviews from "./components/CustomerReviews"
import Navigation from "./components/Navigation"
import ProductMap from "./components/ProductMap"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <CustomerFavorites />
      <Mission />
      {/* <OurCreations /> */}
      <ProductMap />
      <CustomerReviews />
      <Footer/>
    </main>
  )
}

