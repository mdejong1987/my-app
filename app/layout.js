import "./globals.css";
import Navigation from "./components/Navigation";
import BackToTopButton from "./components/BackToTopButton";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero video-banner">
      <video autoPlay muted loop playsInline>
        <source src="/videos/video-banner.mp4" type="video/mp4" />
      </video>
      <div className="video-banner--content">
        <div className="container">
          <div className="title is-size-1 is-size-3-mobile is-uppercase has-text-white">
            Echte dorpsgarage uit Terheijden
          </div>
          <div className="subtitle is-size-2 is-size-4-mobile has-text-white">
            met een persoonlijke, eerlijke en transparante aanpak
          </div>
          <div className="button is-large is-primary has-text-white is-hidden-touch">
            <a href="#contact">Maak een afspraak</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title:
    "Garage van Riel - Echte dorpsgarage uit Terheijden met een persoonlijke, eerlijke en transparante aanpak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className="has-navbar-fixed-top">
      <body>
        <header>
          <Navigation />
          <Hero />
        </header>

        {children}

        <BackToTopButton />

        <footer id="contact" className="footer">
          <div className="content columns">
            <div className="column py-5">
              <h2 className="is-uppercase">Wij werken samen met</h2>
              <div className="grid">
                <div className="cell">
                  <Image
                    src="/images/bovag-logo.webp"
                    alt="BOVAG Logo"
                    width="65"
                    height="103"
                  ></Image>
                </div>
                <div className="cell">
                  <Image
                    src="/images/bovag-logo.webp"
                    alt="BOVAG Logo"
                    width="65"
                    height="103"
                  ></Image>
                </div>
                <div className="cell">
                  <Image
                    src="/images/bovag-logo.webp"
                    alt="BOVAG Logo"
                    width="65"
                    height="103"
                  ></Image>
                </div>
                <div className="cell">
                  <Image
                    src="/images/bovag-logo.webp"
                    alt="BOVAG Logo"
                    width="65"
                    height="103"
                  ></Image>
                </div>
                <div className="cell">
                  <Image
                    src="/images/bovag-logo.webp"
                    alt="BOVAG Logo"
                    width="65"
                    height="103"
                  ></Image>
                </div>
                <div className="cell">
                  <Image
                    src="/images/bovag-logo.webp"
                    alt="BOVAG Logo"
                    width="65"
                    height="103"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="py-5">
                <h2 className="is-uppercase">Garage van Riel</h2>
                <p className="is-size-4">
                  Sinds 1913 uw vertrouwde universele autobedrijf. Eerlijke
                  service, persoonlijk contact en een klantvriendelijke aanpak
                  voor alle merken.
                </p>
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/garage.van.riel.terheijden/"
                    target="_blank"
                    className="is-size-4 has-text-dark"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/garagevanriel/"
                    target="_blank"
                    className="is-size-4 has-text-dark"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
              <div className="py-5">
                <h2 className="is-uppercase">Contact</h2>
                <div className="is-size-4 py-2">
                  <i className="bi bi-geo mr-2"></i>Hoofdstraat 72, 4844 CG
                  Terheijden
                </div>
                <div className="is-size-4 py-2">
                  <i className="bi bi-telephone mr-2"></i>
                  <a href="tel:+31765931215">+31 (0)76 593 1215</a>
                </div>
                <div className="is-size-4 py-2">
                  <i className="bi bi-envelope mr-2"></i>
                  <a href="mailto:info@garagevanriel.nl">
                    info@garagevanriel.nl
                  </a>
                </div>
              </div>
              <div className="py-5">
                <h2 className="is-uppercase">Openingstijden</h2>
                <div className="is-size-4">
                  <div className="opening-hours">
                    <div>Maandag - Vrijdag | 08:00 - 18:00</div>
                    <div className="opening-hours-break">
                      Gesloten tijdens lunchpauze:
                      <strong> 12:15 - 13:00</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content has-text-centered">
            &copy; garagevanriel.nl {new Date().getFullYear()}
            <nav className="legal-links" aria-label="Juridische informatie">
              <a
                href="/privacyverklaring.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacyverklaring
              </a>
              <a
                href="/wettelijke-garantie.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wettelijke garantie
              </a>
              <a
                href="/algemene-voorwaarden.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Algemene voorwaarden
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
