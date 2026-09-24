import "./globals.css";
import Image from "next/image";

function Navigation() {
  return (
    <nav
      className="navbar is-fixed-top py-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <Image
              src="/images/gvr-logo.jpg"
              alt="Logo"
              width="200"
              height="91"
            ></Image>
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
              <a
                className="call-button"
                href="tel:+31768945325"
                aria-label="Bel ons: 076 894 5325"
              >
                <span className="call-button__icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                  </svg>
                </span>
                <span className="call-button__text">
                  <small>Bel ons direct</small>
                  <strong>076 894 5325</strong>
                </span>
              </a>
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
