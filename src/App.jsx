import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import heroBg from "./assets/hero1.jpg";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import { FaArrowUp } from "react-icons/fa";
import MapPage from "./components/Map";
import Gallery from "./components/Gallery";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Section with Background */}
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
        <Navbar />
        <Hero />
      </div>

      {/* Other Sections */}
      <Gallery />
      <Products />
      <Testimonials />
      <MapPage />
      <Footer />

      {/* Scroll to Top Button */}
      <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${showScrollTop ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}`}>
        <button onClick={scrollToTop} className="bg-yellow-400 text-[#5C3317] p-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out" aria-label="Scroll to top">
          <FaArrowUp className="text-lg" />
        </button>
      </div>
    </div>
  );
}

export default App;
