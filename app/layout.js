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
  return <div className="header-cta">Bel Ons: +6 452536985</div>;
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <header>
          <div className="header-logo">
            <a href="#">Logo</a>
          </div>
          <nav>
            <Navigation />
          </nav>
          <Cta />
          <Hero />
        </header>
        {children}
        <footer>Hier komt de footer</footer>
      </body>
    </html>
  );
}
