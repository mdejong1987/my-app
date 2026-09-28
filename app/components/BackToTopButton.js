"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    gsap.to(window, {
      duration: 0.7,
      ease: "power2.inOut",
      scrollTo: {
        y: 0,
      },
    });
  };

  return (
    <button
      type="button"
      className={`back-to-top button is-primary is-rounded ${
        isVisible ? "is-visible" : ""
      }`}
      onClick={handleClick}
      aria-label="Terug naar boven"
    >
      <span className="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 5.2 4.5 12.7l1.4 1.4L11 9.8V19h2V9.8l5.1 5.3 1.4-1.4L12 5.2z" />
        </svg>
      </span>
    </button>
  );
}
