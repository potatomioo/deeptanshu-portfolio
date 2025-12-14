const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a product-focused engineer passionate about building large-scale applications 
              that solve real problems. With experience owning complex flows like payment systems 
              and a deep interest in AR/VR and metaverse technologies, I bring system thinking 
              and clean architecture to every project.
            </p>
            <p className="about-description">
              My approach combines technical excellence with product intuition, ensuring that 
              every solution is not just well-engineered, but truly impactful for users.
            </p>
          </div>
          <div className="about-skills">
            <div className="skill-category">
              <h3>Mobile Development</h3>
              <div className="skills">
                <span className="skill">Android</span>
                <span className="skill">iOS</span>
                <span className="skill">Kotlin Multiplatform</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Metaverse & AR/VR</h3>
              <div className="skills">
                <span className="skill">Unity</span>
                <span className="skill">3D Development</span>
                <span className="skill">Game Development</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend & Systems</h3>
              <div className="skills">
                <span className="skill">Scalable Architecture</span>
                <span className="skill">Payment Systems</span>
                <span className="skill">Product Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;