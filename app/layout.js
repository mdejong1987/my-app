import "./globals.css";

function Navigation() {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}

function Hero() {
  return <div className="header-hero">[HERO IMAGE HERE]</div>;
}

function Cta() {
  return (
    <a className="header-cta" href="tel:0768945325">
      <span>BEL ONS:</span> 0768945325
    </a>
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
          <div className="header-container">
            <div className="header-logo">
              <a href="/">Logo</a>
            </div>
            <nav>
              <Navigation />
            </nav>
            <Cta />
          </div>
          <Hero />
        </header>
        {children}
        <footer>Hier komt de footer</footer>
      </body>
    </html>
  );
}
