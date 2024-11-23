import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-router-dom";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo"></img>
      <ul>
        <li>
          <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="program" smooth={true} offset={-260} duration={500}>
            Program
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
            About us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};
