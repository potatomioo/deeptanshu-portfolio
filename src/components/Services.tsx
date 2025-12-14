const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="services-subtitle">
          Transforming ideas into scalable digital solutions
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              📱
            </div>
            <h3 className="service-title">Mobile App Development</h3>
            <p className="service-description">
              Native Android & iOS apps plus Kotlin Multiplatform solutions. 
              Building scalable consumer apps used by millions with clean architecture 
              and seamless user experiences.
            </p>
            <div className="service-features">
              <span className="feature">Android Native</span>
              <span className="feature">iOS Native</span>
              <span className="feature">Kotlin Multiplatform</span>
              <span className="feature">Payment Integration</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              🥽
            </div>
            <h3 className="service-title">Metaverse & AR/VR Solutions</h3>
            <p className="service-description">
              Immersive AR/VR experiences and game development using Unity. 
              Creating virtual environments and interactive 3D applications 
              for next-generation user engagement.
            </p>
            <div className="service-features">
              <span className="feature">Unity Development</span>
              <span className="feature">3D Modeling</span>
              <span className="feature">VR Experiences</span>
              <span className="feature">Game Development</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              ⚡
            </div>
            <h3 className="service-title">Product-Driven Backend</h3>
            <p className="service-description">
              Scalable backend systems with product thinking at the core. 
              Designing robust APIs, payment systems, and microservices 
              that handle millions of transactions reliably.
            </p>
            <div className="service-features">
              <span className="feature">System Design</span>
              <span className="feature">API Development</span>
              <span className="feature">Payment Systems</span>
              <span className="feature">Microservices</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              🎨
            </div>
            <h3 className="service-title">Web Products & Design</h3>
            <p className="service-description">
              Modern web applications with focus on user experience and 
              performance. From concept to deployment, creating digital 
              products that users love and businesses need.
            </p>
            <div className="service-features">
              <span className="feature">React/TypeScript</span>
              <span className="feature">UI/UX Design</span>
              <span className="feature">Performance Optimization</span>
              <span className="feature">Full-Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;