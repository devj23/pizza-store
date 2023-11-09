const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(images/hero-bg.jpg)` }}
    >
      <div className="hero">
        <h1 className="hero-title">World&apos; best pizza!</h1>
        <p className="hero-lead">More cheese, more toppings, more to share.</p>
        <button className="hero-btn">Place Order</button>
      </div>
    </section>
  );
};

export default Hero;
