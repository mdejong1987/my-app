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
            Hero Title
          </div>
          <div className="subtitle is-size-2 is-size-4-mobile has-text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="button is-large is-primary has-text-white is-hidden-touch">
            Maak een afspraak
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Dit is een titel",
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
          <div className="content has-text-centered">
            &copy; [ Bedrijfsnaam ] 2026
          </div>
        </footer>
      </body>
    </html>
  );
}
