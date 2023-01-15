import React from "react";
import Features from "./components/Features";
import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <HeaderNav />
      <div className="container mx-auto px-4 sm:px-0 relative">
      <HeroSection />
      <Features />
      </div>
    </>
  );
}

export default App;
