import React from "react";

// CSS
import "Pages/Home/css/style.css";
import "Pages/Home/css/style-faq.css";
import "Pages/Home/css/style-footer.css";
import "Pages/Home/css/style-slider.css";

import { Footer } from "./Footer";
import { Faq } from "./Faq";
import { HomeHeader } from "./Header";
import { MidSection } from "./MidSection";
import { Nav } from "./Nav";
import { Slider } from "./Silder";

export const Home = () => {
  return (
    <div className="home" id="home">
      <Nav />
      <HomeHeader />
      <Slider />
      <MidSection />
      <Faq />
      <Footer />
    </div>
  );
};

