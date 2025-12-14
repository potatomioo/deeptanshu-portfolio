const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Deeptanshu Shukla</h1>
          <h2 className="hero-title">Software Engineer | Product Builder</h2>
          <p className="hero-description">
            Building scalable mobile apps and immersive metaverse experiences 
            that millions of users love
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-hire-me">
              Hire Me
            </a>
            <a href="#projects" className="btn-secondary">View Work</a>
            <a href="#contact" className="btn-tertiary">Let's Connect</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="code-snippet">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">engineer</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="property">passion</span>: <span className="string">'building'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">focus</span>: <span className="string">'impact'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">scale</span>: <span className="string">'millions'</span>
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;