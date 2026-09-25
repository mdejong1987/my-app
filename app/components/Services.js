"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const baseServices = [
  {
    title: "ACCU's",
    description:
      "Kapotte accu’s: u heeft er vast al eens te maken mee gehad. Maar wat kunt u doen om het zo lang mogelijk uit te stellen? En wist u dat wij uw accu gratis willen testen voor u?",
  },
  {
    title: "AIRCO",
    description:
      "Wij bieden zowel service als reparaties aan het aircosysteem van uw auto. Voor het maken van een afspraak of het aanvragen van een prijsopgave kunt u ons bellen of mailen.",
  },
  {
    title: "APK",
    description:
      "Door onze RDW erkenning mogen wij auto’s, campers en lichte bedrijfswagens (tot 3.500 kilo) keuren. Wat zijn de kosten voor een keuring en hoe zit het nu met die regels en termen?",
  },
  {
    title: "Banden en Wielen",
    description:
      "Waarom zijn banden zo belangrijk, wat zijn de kosten en voordelen van zomer-, winter- en vierseizoenenbanden? En wist u ook dat u bij ons uw wielen gratis* kunt opslaan?",
  },
  {
    title: "Distributieriem en Ketting",
    description:
      "Wat is het verschil tussen een distributieriem en ketting en waarom zou ik het vervangen? Hier leggen we uit hoe de vork in de steel steekt en wat u zelf kunt doen of merken aan uw auto.",
  },
  {
    title: "EV & Hybride Specialist",
    description:
      "Wij zijn EV- en hybridespecialist, wat betekent dat wij: gecertificeerd zijn, op de hoogte blijven door cursussen te volgen, laadoplossingen en EV private lease aanbieden.",
  },
  {
    title: "Onderhoudsbeurten",
    description:
      "Waarom is onderhoud zo belangrijk en wat is nu het verschil tussen een kleine en grote beurt?En wanneer heeft mijn auto welk onderhoud nodig?",
  },
  {
    title: "Pechhulp",
    description:
      "Als u als klant hier in Terheijden of omstreken met pech staat, proberen wij u altijd zo snel mogelijk te komen helpen. Maar wist u dat u ook bij ons BOVAG Pechhulp kunt afsluiten voor als u verder weg staat in NL of EU?",
  },
  {
    title: "Remmen",
    description:
      "Dat remmen belangrijk zijn hoeven wij u niet te vertellen, maar wat doen alle verschillende onderdelen nu precies en waar kunt u op letten? Wat nu als u een geluid hoort met remmen? Dit alles leggen wij u graag uit.",
  },
];

const services = [...baseServices, ...baseServices];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  const activeIndexRef = useRef(0);
  const [, setDisplayIndex] = useState(0);

  const cardWidth = 320;
  const gap = 24;
  const step = cardWidth + gap;

  const goToIndex = (targetIndex, animate = true) => {
    const total = services.length;

    // Wrap target index safely
    let wrappedIndex = ((targetIndex % total) + total) % total;
    activeIndexRef.current = wrappedIndex;
    setDisplayIndex(wrappedIndex);

    // Calculate dynamic center offset based on container width
    const containerWidth = containerRef.current
      ? containerRef.current.offsetWidth
      : 0;
    const centerOffset = (containerWidth - cardWidth) / 2;
    const targetX = -wrappedIndex * step + centerOffset;

    // Animate track translation
    gsap.to(trackRef.current, {
      x: targetX,
      duration: animate ? 0.6 : 0,
      ease: "power2.out",
    });

    // Animate scale & opacity focus effect
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const isCenter = i === wrappedIndex;

      gsap.to(card, {
        scale: isCenter ? 1.08 : 0.88,
        opacity: isCenter ? 1 : 0.5,
        duration: animate ? 0.5 : 0,
        ease: "power2.out",
      });
    });
  };

  useGSAP(
    () => {
      // Initialize layout centered on load
      goToIndex(0, false);

      // Recalculate center alignment on window resize
      const handleResize = () => goToIndex(activeIndexRef.current, false);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    },
    { scope: containerRef },
  );

  return (
    <section
      id="services"
      className="section content-main content-main--services"
      ref={containerRef}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="content container is-flex is-justify-content-space-between is-align-items-center mb-5">
        <h2 className="is-size-2 title mb-0">Services</h2>

        {/* Controls */}
        <div className="buttons">
          <button
            className="button is-outlined is-dark"
            onClick={() => goToIndex(activeIndexRef.current - 1)}
            aria-label="Previous service"
          >
            ←
          </button>
          <button
            className="button is-outlined is-dark"
            onClick={() => goToIndex(activeIndexRef.current + 1)}
            aria-label="Next service"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="is-flex" style={{ width: "100%", overflow: "hidden" }}>
        <div
          ref={trackRef}
          className="columns is-mobile my-0"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: `${gap}px`,
            willChange: "transform",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="column"
              style={{
                width: `${cardWidth}px`,
                flex: "0 0 auto",
                transformOrigin: "center center",
              }}
            >
              <div
                className="card"
                style={{
                  height: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div className="card-content">
                  <h2 className="title is-4">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
