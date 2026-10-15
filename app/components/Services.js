"use client";

import { useEffect, useRef, useState } from "react";
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

export default function ServicesSection() {
  const containerRef = useRef(null);
  const pageRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const pageCount = Math.ceil(baseServices.length / pageSize);

  const goToPage = (direction) => {
    setCurrentPage((page) => (page + direction + pageCount) % pageCount);
  };

  useEffect(() => {
    const updatePageSize = () => {
      const nextPageSize = window.innerWidth <= 768 ? 2 : 6;

      if (nextPageSize !== pageSize) {
        setCurrentPage(0);
        setPageSize(nextPageSize);
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
  }, [pageSize]);

  useGSAP(
    () => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, x: 16 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" },
      );
    },
    { scope: containerRef, dependencies: [currentPage, pageSize] },
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

        <div className="buttons">
          <button
            className="button is-outlined is-dark"
            onClick={() => goToPage(-1)}
            aria-label="Vorige pagina met services"
          >
            ←
          </button>
          <button
            className="button is-outlined is-dark"
            onClick={() => goToPage(1)}
            aria-label="Volgende pagina met services"
          >
            →
          </button>
        </div>
      </div>

      <div className="container">
        <div ref={pageRef} className="columns is-multiline">
          {baseServices
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map((service) => (
              <div
                key={service.title}
                className="column is-half-tablet is-one-third-desktop"
                style={{ display: "flex" }}
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="card-content">
                    <div className="has-text-centered mb-4">
                      <i
                        className="bi bi-car-front"
                        style={{ fontSize: "4rem" }}
                        aria-hidden="true"
                      ></i>
                    </div>
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
