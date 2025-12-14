const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name-animated">
            <span className="name-first">DEEPTANSHU</span>
            <span className="name-last">SHUKLA</span>
          </h1>
          <h2 className="hero-title">Software Engineer | Product Builder</h2>
          <p className="hero-description">
            Building scalable mobile apps and immersive metaverse experiences 
            that millions of users love
          </p>
          <div className="hero-cta-centered">
            <a href="#contact" className="btn-glass-primary">
              <span className="hire-icon">🚀</span>
              Hire Me
            </a>
            <a href="#projects" className="btn-glass-secondary">View Work</a>
            <a href="#contact" className="btn-glass-tertiary">Let's Connect</a>
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