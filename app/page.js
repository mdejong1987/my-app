export default function Home() {
  return (
    <main>
      <section id="about" className="section content-main content-main--about">
        <div className="content container">
          <h2 className="is-size-2 title">About</h2>
          <p className="is-size-4 subtitle">
            Sed in feugiat augue. Morbi pretium purus mi, ac vestibulum sapien
            sodales sed. Maecenas ac efficitur odio. Quisque posuere nisi
            volutpat massa ultricies, vel finibus sem congue. Aliquam vel ligula
            non neque tincidunt tincidunt. Donec ullamcorper vestibulum tortor.
            Nunc lacinia ipsum non ante tincidunt, ac imperdiet est placerat. In
            id dui maximus, lobortis ipsum nec, porta justo. Cras venenatis
            lacus justo, id faucibus neque maximus quis. Pellentesque non tempor
            ipsum. Praesent est neque, mattis ac lorem quis, semper pharetra ex.
          </p>
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

      <div className="content-main content-main--cta">
        <div className="content container">
          <h2 className="is-size-2">Call To Action</h2>
        </div>
      </div>

      <div className="content-main content-main--reviews">
        <div className="content container">
          <h2 className="is-size-2">Wat zeggen anderen?</h2>
          <h3 className="is-size-3">Neem het net van ons aan maar wel van</h3>
        </div>
      </div>

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
