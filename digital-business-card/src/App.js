import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <main className="info--card_background">
        <Info />
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}

// Components: 
// - Info (photo, name, buttons, etc) 
// - About; 
// - Interests; 
// - Footer (social icons)
