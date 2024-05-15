import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  //Hot Reload
  const handleReload = () => {
    window.location.href = '/design-tool';
  };

  const [showMobileNav, setShowMobileNav] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust the offset as needed

        if (window.scrollY >= sectionTop) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header" className="d-flex align-items-center fixed-top">
      <div className="container container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <Link to="/" onClick={() => scrollToSection("hero")}>Chardin</Link>
        </h1>

        <nav
          id="navbar"
          className={`navbar order-last order-lg-0 ${
            showMobileNav ? "navbar-mobile" : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/#" className={`nav-link scrollto ${activeSection === "hero" ? "active" : ""}`} onClick={() => scrollToSection("hero")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#" className={`nav-link scrollto ${activeSection === "gallery" ? "active" : ""}`} onClick={() => scrollToSection("gallery")}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/#" className={`nav-link scrollto ${activeSection === "about" ? "active" : ""}`} onClick={() => scrollToSection("about")}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/#" className={`nav-link scrollto ${activeSection === "services" ? "active" : ""}`} onClick={() => scrollToSection("services")}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/#" className={`nav-link scrollto ${activeSection === "designers" ? "active" : ""}`} onClick={() => scrollToSection("designers")}>
                Designers
              </Link>
            </li>
            <li>
              <Link to="/track-order" className={`nav-link scrollto ${location.pathname === "/track-order" ? "active" : ""}`}>
                Track My Order
              </Link>
            </li>
            <li>
              <Link to="/#" className={`nav-link scrollto ${activeSection === "contact" ? "active" : ""}`} onClick={() => scrollToSection("contact")}>
                Contact Us
              </Link>
            </li>
          </ul>
          <i
            className={`bi bi-list mobile-nav-toggle ${
              showMobileNav ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
        <Link to="/design-tool" className="text-decoration-none">
        <a
          id="tryButtonLarge"
          className="btn-outlined scrollto d-none d-lg-flex"
          onClick={handleReload}
        >
          TRY OUR DESIGN TOOL
        </a>

        <a
          id="tryButtonSmall"
          className="btn-outlined scrollto d-flex d-lg-none d-xl-none" // Added d-xl-none
          onClick={handleReload}
        >
          TRY 🎨
        </a>

        </Link>
      </div>
    </header>
  );
}
