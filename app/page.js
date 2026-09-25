import GoogleReviews from "@/app/components/GoogleReviews";

export default function Home() {
  return (
    <main>
      <section className="section content-main content-main--numbers">
        <div className="content container">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Tweets</p>
                <p className="title">3,456</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Followers</p>
                <p className="title">456K</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Likes</p>
                <p className="title">789</p>
              </div>
            </div>
          </nav>
        </div>
      </section>
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
              <strong>Familiebedrijf sinds 1913:</strong>Vier generaties aan
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

      <section
        id="services"
        className="section content-main content-main--services"
      >
        <div className="content container">
          <h2 className="is-size-2 title">Services</h2>
          <div className="columns is-3 is-mobile">
            <div className="column">
              <div className="card">
                <div className="card-content">sdf</div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">sdf</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="content-main content-main--reviews">
        <div className="content container">
          <h2 className="is-size-2">Wat zeggen anderen?</h2>
          <h3 className="is-size-3">Neem het net van ons aan maar wel van</h3>
          <GoogleReviews />
        </div>
      </div>

      <section className="section content-main content-main--cta">
        <div className="content container has-text-centered">
          <h2 className="is-size-2">Maak vandaag nog een afspraak!</h2>
          <p>
            Wij staan altijd voor je klaar om samen te kijken naar de
            mogelijkheden
          </p>
          <a href="" className="button is-warning">
            Maak afspraak
          </a>
        </div>
      </section>

      <div className="content-main content-main--faq">
        <div className="content container">
          <h2 className="is-size-2">Meest gestelde vragen</h2>
        </div>
      </div>

      <div id="contact" className="content-main content-main--contact">
        <div className="content container">
          <h2 className="is-size-2">Contact</h2>
        </div>
      </div>
    </main>
  );
}
