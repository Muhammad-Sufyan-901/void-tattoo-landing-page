import React from "react";

// import components
import { Header, Hero, About, GallerySection, Skills, Testimonial, Interview, Contact, Footer, Copyright } from "./components";

const App = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
