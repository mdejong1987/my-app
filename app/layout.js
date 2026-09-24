import "./globals.css";
import Image from "next/image";

function Navigation() {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            [Logo]
          </a>
          <a
            className="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="#about">
              About
            </a>
            <a className="navbar-item" href="#services">
              Services
            </a>
            <a className="navbar-item" href="#contact">
              Contact
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-warning" href="tel:0768945325">
                  <strong>BEL ONS:</strong>
                  0768945325
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="hero is-large video-banner">
      <video autoPlay muted loop playsInline>
        <source src="/videos/video-banner.mp4" type="video/mp4" />
      </video>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-hidden-touch"></div>
            <div className="column is-three-fifths">
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

        <footer className="footer">
          <div className="content has-text-centered">
            &copy; [ Bedrijfsnaam ] 2026
          </div>
        </footer>
      </body>
    </html>
  );
}
