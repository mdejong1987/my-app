import GoogleReviews from "@/app/components/GoogleReviews";
import CompanyStats from "@/app/components/CompanyStats";
import Services from "@/app/components/Services";
import Faq from "@/app/components/Faq";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main>
      <CompanyStats />

      <section id="about" className="section content-main content-main--about">
        <div className="content container is-medium">
          <h2>Over ons</h2>
          <p>
            Al sinds 1913 is Garagebedrijf Van Riel een vertrouwd gezicht.
            Inmiddels staat de vierde generatie aan het roer, met nog steeds
            dezelfde kernwaarden: eerlijke service, persoonlijk contact en een
            klantvriendelijke aanpak. Als universeel autobedrijf onderhouden en
            repareren wij alle merken auto’s.
          </p>
          <h3>Waarom kiezen voor Van Riel?</h3>
          <ul>
            <li>
              <strong>Familiebedrijf sinds 1913:</strong> Vier generaties aan
              ervaring en passie voor het vak.
            </li>
            <li>
              <strong>BOVAG-gecertificeerd:</strong> Sinds 1938 lid van BOVAG,
              wat staat voor bewezen kwaliteit, garantie en betrouwbaarheid.
            </li>
            <li>
              <strong>Universele service:</strong> Onderhoud en reparatie voor
              elk automerk.
            </li>
            <li>
              <strong>Snelle service zonder afspraak:</strong> Kom gerust langs
              voor het vervangen van een lampje, bandenspanning of
              vloeistofcontrole.
            </li>
          </ul>
        </div>
      </section>

      <Services />

      <GoogleReviews />

      <section className="section content-main content-main--cta">
        <div className="content container has-text-centered">
          <h2 className="is-size-2">Neem Contact Op</h2>
          <p>
            Wilt u een afspraak maken of heeft u direct een vraag? Bel ons
            gerust!
          </p>
          <div className="mb-6">
            <a href="tel:0765931215" className="button phone-cta-button">
              <span className="icon mr-2">📞</span>
              <span>076 593 1215</span>
            </a>
          </div>
        </div>
      </section>

      <Faq />

      <Contact />
    </main>
  );
}
