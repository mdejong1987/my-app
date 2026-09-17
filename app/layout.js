import "./globals.css";
import Image from "next/image";

function Navigation() {
  return (
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
  );
}

function Hero() {
  return (
    <div className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <cdiv className="columns">
            <div className="column"></div>
            <div className="column is-three-fifths">
              <div className="title is-size-1 is-uppercase has-text-white">
                Hero Title
              </div>
              <div className="subtitle is-size-2 has-text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="button is-large is-primary has-text-white">
                Maak een afspraak
              </div>
            </div>
          </cdiv>
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
    <html lang="nl">
      <body>
        <header>
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <a href="/">
                  <Image
                    src="/images/logo.jpg"
                    alt="Logo"
                    width="150"
                    height="50"
                  ></Image>
                </a>
              </div>
              <Navigation />
            </nav>
          </div>
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
