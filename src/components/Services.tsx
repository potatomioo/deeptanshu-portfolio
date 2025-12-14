const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="services-subtitle">
          Transforming ideas into scalable digital solutions
        </p>
        <div className="services-grid-glass">
          <div className="services-row first-row">
            <div className="service-card-glass">
              <h3 className="service-title-glass">Mobile App Products</h3>
              <p className="service-description-glass">
                Native Android & iOS apps plus Kotlin Multiplatform solutions. 
                Building scalable consumer apps used by millions with clean architecture 
                and seamless user experiences.
              </p>
              <div className="service-features-glass">
                <span className="feature-glass">Android Native</span>
                <span className="feature-glass">iOS Native</span>
                <span className="feature-glass">Kotlin Multiplatform</span>
                <span className="feature-glass">Payment Integration</span>
              </div>
            </div>

            <div className="service-card-glass">
              <h3 className="service-title-glass">Web Products & Design</h3>
              <p className="service-description-glass">
                Modern web applications with focus on user experience and 
                performance. From concept to deployment, creating digital 
                products that users love and businesses need.
              </p>
              <div className="service-features-glass">
                <span className="feature-glass">React/TypeScript</span>
                <span className="feature-glass">UI/UX Design</span>
                <span className="feature-glass">Performance Optimization</span>
                <span className="feature-glass">Full-Stack Development</span>
              </div>
            </div>

            <div className="service-card-glass">
              <h3 className="service-title-glass">Metaverse AR/VR Solutions</h3>
              <p className="service-description-glass">
                Immersive AR/VR experiences and game development using Unity. 
                Creating virtual environments and interactive 3D applications 
                for next-generation user engagement.
              </p>
              <div className="service-features-glass">
                <span className="feature-glass">Unity Development</span>
                <span className="feature-glass">3D Modeling</span>
                <span className="feature-glass">VR Experiences</span>
                <span className="feature-glass">AR Applications</span>
              </div>
            </div>
          </div>

          <div className="services-row second-row">
            <div className="service-card-glass">
              <h3 className="service-title-glass">Game Products</h3>
              <p className="service-description-glass">
                Interactive gaming experiences across platforms. From mobile games 
                to PC applications, creating engaging gameplay mechanics and 
                immersive user experiences.
              </p>
              <div className="service-features-glass">
                <span className="feature-glass">Unity Game Engine</span>
                <span className="feature-glass">Cross-Platform</span>
                <span className="feature-glass">Game Mechanics</span>
                <span className="feature-glass">Interactive Design</span>
              </div>
            </div>

            <div className="service-card-glass">
              <h3 className="service-title-glass">Product-Driven Backends</h3>
              <p className="service-description-glass">
                Scalable backend systems with product thinking at the core. 
                Designing robust APIs, payment systems, and microservices 
                that handle millions of transactions reliably.
              </p>
              <div className="service-features-glass">
                <span className="feature-glass">System Design</span>
                <span className="feature-glass">API Development</span>
                <span className="feature-glass">Payment Systems</span>
                <span className="feature-glass">Microservices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;