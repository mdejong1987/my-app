"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const statistics = [
  { label: "Jaar ervaring", value: 25, decimals: 0, suffix: "+" },
  {
    label: "Auto's onderhouden per jaar",
    value: 1200,
    decimals: 0,
    suffix: "+",
  },
  { label: "Google Beoordeling", value: 4.8, decimals: 1, suffix: "/5" },
  { label: "Google Reviews", value: 80, decimals: 0, suffix: "+" },
];

export default function CompanyStats() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const values = containerRef.current.querySelectorAll("[data-count]");

      values.forEach((element) => {
        const target = Number(element.dataset.count);
        const decimals = Number(element.dataset.decimals);
        const suffix = element.dataset.suffix;
        const valueFormatter = new Intl.NumberFormat("nl-NL", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });

        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power1.out",
          snap: { value: decimals === 0 ? 1 : 0.1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${valueFormatter.format(counter.value)}${suffix}`;
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="section content-main content-main--numbers"
    >
      <div className="content container">
        <nav className="level">
          {statistics.map(({ label, value, decimals, suffix }) => (
            <div key={label} className="level-item has-text-centered">
              <div>
                <p className="heading">{label}</p>
                <p
                  className="title"
                  data-count={value}
                  data-decimals={decimals}
                  data-suffix={suffix}
                >
                  {new Intl.NumberFormat("nl-NL", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                  }).format(value)}
                  {suffix}
                </p>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
