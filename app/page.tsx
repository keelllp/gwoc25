import Hero from "@/app/components/Hero";
import CustomerFavorites from "@/app/components/CustomerFavorites";
import CustomHampers from "./components/CustomHampers";
// import Mission from "@/app/components/Mission"; // ❌ Removed
// import OurCreations from "@/app/components/OurCreations";
import CustomerReviews from "@/app/components/CustomerReviews";
import Navigation from "@/app/components/Navigation";
import ProductMap from "@/app/components/ProductMap";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <CustomerFavorites />
      <CustomHampers />
      {/* <Mission /> ❌ Removed */}
      {/* <OurCreations /> */}
      <ProductMap />
      <CustomerReviews />
      <Footer />
  
    </main>
  );
}
