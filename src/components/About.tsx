const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Product-focused engineer with a passion for building systems that scale. 
              I've owned complex payment flows serving millions, architected mobile platforms, 
              and explored the frontiers of AR/VR technology.
            </p>
            <p className="about-description">
              My superpower? Combining deep technical expertise with product intuition 
              to create solutions that users love and businesses need.
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