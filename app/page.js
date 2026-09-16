export default function Home() {
  return (
    <main>
      <div id="about" className="content-main content-main--about">
        <div className="content container">
          <h2 className="is-size-1">About</h2>
          <p className="is-size-4">
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
      </div>

      <div id="services" className="content-main content-main--services">
        <div className="content container">
          <h2>Services</h2>
        </div>
      </div>

      <div id="contact" className="content-main content-main--contact">
        <div className="content container">
          <h2>Contact</h2>
        </div>
      </div>
    </main>
  );
}
