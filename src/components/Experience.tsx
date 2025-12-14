const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <h3 className="role-title">Software Development Engineer – Mobile & Platform</h3>
            <span className="company">PW (Physics Wallah)</span>
          </div>
          <div className="experience-content">
            <ul className="achievements">
              <li>
                <span className="achievement-text">
                  Built and shipped production features for high-scale education apps serving millions of users
                </span>
              </li>
              <li>
                <span className="achievement-text">
                  Implemented Kotlin Multiplatform architecture to share business logic across Android & iOS, 
                  reducing development time by 40%
                </span>
              </li>
              <li>
                <span className="achievement-text">
                  Designed and implemented seamless UPI payment flows with custom UI, intelligent retries, 
                  fallbacks, and real-time polling
                </span>
              </li>
              <li>
                <span className="achievement-text">
                  Improved payment success rates by 25% and reduced user drop-offs through optimized UX flows
                </span>
              </li>
              <li>
                <span className="achievement-text">
                  Collaborated closely with product, design, and backend teams to deliver user-centric solutions
                </span>
              </li>
            </ul>
          </div>
          <div className="experience-tech">
            <span className="tech-tag">Kotlin</span>
            <span className="tech-tag">Android</span>
            <span className="tech-tag">iOS</span>
            <span className="tech-tag">KMP</span>
            <span className="tech-tag">Payment Systems</span>
            <span className="tech-tag">UPI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;