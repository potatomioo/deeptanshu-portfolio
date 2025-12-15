const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Split App</h3>
            </div>
            <p className="project-description">
              A consumer-facing expense splitting app focused on clean UX and scalable architecture. 
              Built with product thinking at its core, featuring intuitive UI polish and robust system design 
              for real-world usage and maintainability.
            </p>
            <div className="project-highlights">
              <span className="highlight">Clean Architecture</span>
              <span className="highlight">Product Thinking</span>
              <span className="highlight">Scalable Design</span>
            </div>
            <div className="project-tech">
              <span className="tech-tag">Kotlin</span>
              <span className="tech-tag">Android</span>
              <span className="tech-tag">Clean Architecture</span>
              <span className="tech-tag">MVVM</span>
            </div>
            {/* <div className="project-links-hover">
              <a href="#" className="project-link-hover">View Project</a>
              <a href="#" className="project-link-hover">GitHub</a>
            </div> */}
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Metaverse VR Starter Kit</h3>
            </div>
            <p className="project-description">
              A comprehensive starter kit for building VR and metaverse experiences. Built using Unity 
              with optimized 3D models and immersive interactions, enabling faster development of 
              virtual environments and experiences.
            </p>
            <div className="project-highlights">
              <span className="highlight">VR Development</span>
              <span className="highlight">3D Modeling</span>
              <span className="highlight">Immersive UX</span>
            </div>
            <div className="project-tech">
              <span className="tech-tag">Unity</span>
              <span className="tech-tag">C#</span>
              <span className="tech-tag">VR</span>
              <span className="tech-tag">3D Graphics</span>
            </div>
            {/* <div className="project-links-hover">
              <a href="#" className="project-link-hover">View Project</a>
              <a href="#" className="project-link-hover">GitHub</a>
            </div> */}
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Payment Flow System</h3>
            </div>
            <p className="project-description">
              Enterprise-grade payment system handling millions of transactions. Features intelligent 
              retry mechanisms, fallback strategies, and real-time status polling with custom UI 
              components for seamless user experience.
            </p>
            <div className="project-highlights">
              <span className="highlight">High Scale</span>
              <span className="highlight">Reliability</span>
              <span className="highlight">Custom UI</span>
            </div>
            <div className="project-tech">
              <span className="tech-tag">UPI</span>
              <span className="tech-tag">Payment Gateway</span>
              <span className="tech-tag">Kotlin</span>
              <span className="tech-tag">System Design</span>
            </div>
            {/* <div className="project-links-hover">
              <a href="#" className="project-link-hover">Case Study</a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;