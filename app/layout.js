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
              <strong>BEL ONS:</strong> 0768945325
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero is-primary is-halfheight">
      <div className="hero-body">
        <div className="title">Hero Title</div>
        <div className="subtitle">Hero Title</div>
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
                    width="250"
                    height="150"
                  ></Image>
                </a>
              </div>
              <Navigation />
            </nav>
          </div>
          <Hero />
        </header>
        <div className="container">{children}</div>

        <footer class="footer">
          <div class="content has-text-centered">
            &copy; [ Bedrijfsnaam ] 2026
          </div>
        </footer>
      </body>
    </html>
  );
}
