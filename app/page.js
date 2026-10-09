import GoogleReviews from "@/app/components/GoogleReviews";
import CompanyStats from "@/app/components/CompanyStats";
import Services from "@/app/components/Services";
import Faq from "@/app/components/Faq";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CompanyStats />

      <section id="about" className="section content-main content-main--about">
        <div className="content container is-medium">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-3by2">
                <Image
                  src="/images/over_ons.jpg"
                  alt="Garagebedrijf Van Riel"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: "contain" }}
                />
              </figure>
            </div>
            <div className="column is-7">
              <h2>Over ons</h2>
              <p>
                Al sinds 1913 is Garagebedrijf Van Riel een vertrouwd gezicht.
                Inmiddels staat de vierde generatie aan het roer, met nog steeds
                dezelfde kernwaarden: eerlijke service, persoonlijk contact en
                een klantvriendelijke aanpak. Als universeel autobedrijf
                onderhouden en repareren wij alle merken auto’s.
              </p>
              <h4>Waarom kiezen voor Van Riel?</h4>
              <ul>
                <li>
                  <strong>Familiebedrijf sinds 1913:</strong> Vier generaties
                  aan ervaring en passie voor het vak.
                </li>
                <li>
                  <strong>BOVAG-gecertificeerd:</strong> Sinds 1938 lid van
                  BOVAG, wat staat voor bewezen kwaliteit, garantie en
                  betrouwbaarheid.
                </li>
                <li>
                  <strong>Universele service:</strong> Onderhoud en reparatie
                  voor elk automerk.
                </li>
                <li>
                  <strong>Snelle service zonder afspraak:</strong> Kom gerust
                  langs voor het vervangen van een lampje, bandenspanning of
                  vloeistofcontrole.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <GoogleReviews />

      <section className="section content-main content-main--cta">
        <div className="content container has-text-centered">
          <h2 className="is-size-2">Neem Contact Op</h2>
          <h3>
            Wilt u een afspraak maken of heeft u direct een vraag? Bel ons
            gerust!
          </h3>
          <div className="mb-6">
            <a href="tel:0765931215" className="button phone-cta-button">
              <span className="icon mr-2">📞</span>
              <span>076 593 1215</span>
            </a>
          </div>
        </div>
      </section>

      <Faq />
    </main>
  );
}
