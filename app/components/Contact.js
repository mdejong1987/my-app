"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactSection() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="contact"
      className="section content-main content-main--contact"
      ref={containerRef}
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8-desktop is-10-tablet">
            <div
              ref={cardRef}
              className="card p-5"
              style={{
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <div className="card-content has-text-centered py-6">
                <h2 className="title is-2 mb-3">Neem Contact Op</h2>
                <p className="subtitle is-5 has-text-grey mb-6">
                  Wilt u een afspraak maken of heeft u direct een vraag? Bel ons
                  gerust!
                </p>

                {/* Grote Opvallende Bel-knop */}
                <div className="mb-6">
                  <a
                    href="tel:0761234567"
                    className="button is-dark is-large px-6 py-5"
                    style={{
                      borderRadius: "50px",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    <span className="icon mr-2">📞</span>
                    <span>076 - 123 45 67</span>
                  </a>
                  <p className="help is-size-6 mt-2 has-text-grey">
                    Direct een monteur aan de lijn
                  </p>
                </div>

                <hr className="my-6" />

                {/* Adres & Openingstijden Grid */}
                <div className="columns is-vcentered text-left">
                  <div className="column is-6 has-text-centered-mobile">
                    <h3 className="title is-4 mb-3">Locatie</h3>
                    <p className="has-text-weight-semibold mb-1">
                      Autobedrijf Terheijden
                    </p>
                    <p className="has-text-grey mb-3">
                      Bredaseweg 12
                      <br />
                      4841 AB Terheijden
                    </p>
                    <p className="is-size-7 has-text-grey">
                      E-mail:{" "}
                      <a
                        href="mailto:info@autobedrijf.nl"
                        className="has-text-link"
                      >
                        info@autobedrijf.nl
                      </a>
                    </p>
                  </div>

                  <div className="column is-6 has-text-centered-mobile">
                    <h3 className="title is-4 mb-3">Openingstijden</h3>
                    <ul
                      className="has-text-grey"
                      style={{ listStyle: "none", paddingLeft: 0 }}
                    >
                      <li className="is-flex is-justify-content-space-between mb-1">
                        <span>Maandag - Vrijdag:</span>
                        <span className="has-text-weight-semibold">
                          08:00 - 17:30
                        </span>
                      </li>
                      <li className="is-flex is-justify-content-space-between mb-1">
                        <span>Zaterdag:</span>
                        <span className="has-text-weight-semibold">
                          09:00 - 13:00
                        </span>
                      </li>
                      <li className="is-flex is-justify-content-space-between">
                        <span>Zondag:</span>
                        <span className="has-text-weight-semibold">
                          Gesloten
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
