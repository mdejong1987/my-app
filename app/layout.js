import "./globals.css";
import Navigation from "./components/Navigation";
import BackToTopButton from "./components/BackToTopButton";

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

        <footer className="footer">
          <div className="content columns">
            <div className="column">Partners</div>
            <div className="column">Socials</div>
          </div>
          <div className="content has-text-centered">
            &copy; garagevanriel.nl {new Date().getFullYear()}
          </div>
        </footer>
      </body>
    </html>
  );
}
