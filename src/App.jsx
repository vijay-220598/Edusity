import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Programs } from "./Components/Programs/Programs";
import { Title } from "./Components/Title/Title";
import { About } from "./Components/About/About";
import { Campus } from "./Components/Campus/Campus";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Terms } from "./Components/pages/Terms";
import { Privacy } from "./Components/pages/Privacy";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <div className="container">
                  <Title subTitle="OUR PROGRAM" title="What We Offer" />
                  <Programs />
                  <About />
                  <Title subTitle="GALLERY" title="Campus Photos" />
                  <Campus />
                  <Title subTitle="TESTIMONIALS" title="What Student Says" />
                  <Testimonials />
                  <Title subTitle="CONTACT US" title="Get in touch" />
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/terms&condition" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <div className="container">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
