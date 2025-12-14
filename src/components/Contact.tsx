const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="contact-description">
            Have an idea, project, or opportunity? Let's talk.
          </p>
          <div className="contact-buttons">
            <a href="mailto:deeptanshu@example.com" className="contact-btn email">
              <span className="btn-icon">✉</span>
              Email
            </a>
            <a href="https://linkedin.com/in/deeptanshu" className="contact-btn linkedin">
              <span className="btn-icon">💼</span>
              LinkedIn
            </a>
            <a href="https://github.com/deeptanshu" className="contact-btn github">
              <span className="btn-icon">🔗</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;