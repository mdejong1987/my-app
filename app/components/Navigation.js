"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navigation() {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    if (typeof window !== "undefined" && window.innerWidth > 1023) {
      setIsMenuOpen(false);
      return;
    }

    if (!menuRef.current) {
      setIsMenuOpen(false);
      return;
    }

    setIsMenuOpen(false);

    gsap.to(menuRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(menuRef.current, { display: "none" });
      },
    });
  };

  const toggleMenu = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);

    if (!menuRef.current) {
      return;
    }

    if (nextState) {
      gsap.set(menuRef.current, { display: "block", overflow: "hidden" });
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.22, ease: "power2.out" },
      );
      return;
    }

    closeMenu();
  };

  const handleNavClick = (event) => {
    const href = event.currentTarget.getAttribute("href");

    if (!href || !href.startsWith("#")) {
      closeMenu();
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();

    gsap.to(window, {
      duration: 0.2,
      ease: "power1.out",
      scrollTo: {
        y: target,
        offsetY: 90,
      },
    });
  };

  return (
    <nav
      className="navbar is-fixed-top py-3 has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/">
            <Image
              src="/images/gvr-logo.jpg"
              alt="Logo"
              width="150"
              height="68"
            ></Image>
          </a>
          <a
            className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
            role="button"
            aria-label="menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          ref={menuRef}
          className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
        >
          <div className="navbar-start is-justify-content-center is-flex-grow-1">
            <a className="navbar-item" href="/" onClick={handleNavClick}>
              Home
            </a>
            <a className="navbar-item" href="#about" onClick={handleNavClick}>
              About
            </a>
            <a
              className="navbar-item"
              href="#services"
              onClick={handleNavClick}
            >
              Services
            </a>
            <a className="navbar-item" href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
