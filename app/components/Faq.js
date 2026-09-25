"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const faqData = [
  {
    question: "Hoe kan ik een afspraak maken voor onderhoud of APK?",
    answer:
      "U kunt eenvoudig telefonisch een afspraak maken via ons telefoonnummer of een e-mail sturen. Wij nemen dan zo snel mogelijk contact met u op om een geschikte datum en tijd in te plannen.",
  },
  {
    question: "Bieden jullie ook vervangend vervoer aan?",
    answer:
      "Ja, wij hebben leenauto's en leenfietsen beschikbaar wanneer uw auto bij ons staat voor onderhoud of reparatie. Vraag naar de mogelijkheden bij het maken van uw afspraak.",
  },
  {
    question: "Wat is het verschil tussen een kleine en een grote beurt?",
    answer:
      "Bij een kleine beurt worden essentiële punten gecontroleerd zoals olie, oliefilter en vloeistoffen. Een grote beurt is uitgebreider en controleert ook de remmen, bougies, filters en diverse overige slijtagedelen.",
  },
  {
    question: "Kan ik bij jullie terecht met een elektrische of hybride auto?",
    answer:
      "Absoluut! Wij zijn gecertificeerd EV- en hybridespecialist. Onze monteurs volgen continue bijscholing om veilig en vakkundig te werken aan alle merken elektrische voertuigen.",
  },
  {
    question: "Wat moet ik doen als ik met pech langs de weg sta?",
    answer:
      "Bent u in de regio? Bel ons direct en wij kijken of we u direct kunnen helpen. Voor onderweg in Nederland of Europa kunt u via ons ook BOVAG Pechhulp afsluiten.",
  },
];

export default function FaqSection() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  // Refs array om de geanimeerde antwoord-divs bij te houden
  const answerRefs = useRef([]);
  const iconRefs = useRef([]);

  const toggleFaq = (index) => {
    const isOpening = openIndex !== index;

    // Sluit het huidige openstaande item (als dat er is)
    if (openIndex !== null && answerRefs.current[openIndex]) {
      gsap.to(answerRefs.current[openIndex], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(iconRefs.current[openIndex], {
        rotate: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }

    // Open het nieuwe item (als er niet op hetzelfde geopende item is geklikt)
    if (isOpening && answerRefs.current[index]) {
      gsap.to(answerRefs.current[index], {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(iconRefs.current[index], {
        rotate: 180,
        duration: 0.3,
        ease: "power2.inOut",
      });
      setOpenIndex(index);
    } else {
      setOpenIndex(null);
    }
  };

  return (
    <section
      id="faq"
      className="section content-main content-main--faq"
      ref={containerRef}
    >
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8-desktop">
            <h2 className="title is-2 mb-6 text-center">Veelgestelde Vragen</h2>

            <div className="faq-list">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="card mb-4"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid #f0f0f0",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  }}
                >
                  {/* Klikbare Header */}
                  <button
                    className="card-header p-4 is-flex is-justify-content-space-between is-align-items-center"
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      boxShadow: "none",
                    }}
                    aria-expanded={openIndex === index}
                  >
                    <span className="title is-5 mb-0 has-text-dark">
                      {item.question}
                    </span>
                    <span
                      ref={(el) => (iconRefs.current[index] = el)}
                      className="icon is-medium ml-3"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transformOrigin: "center center",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {/* Geanimeerde Antwoord Body */}
                  <div
                    ref={(el) => (answerRefs.current[index] = el)}
                    style={{
                      height: 0,
                      opacity: 0,
                      overflow: "hidden",
                    }}
                  >
                    <div className="card-content pt-0 pb-5 px-4 has-text-grey">
                      <p style={{ lineHeight: "1.6" }}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
