const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Ready to Work Together?</h2>
          <p className="contact-description">
            Available for freelance projects, consulting, and full-time opportunities. 
            Let's turn your vision into reality.
          </p>
          <div className="contact-buttons">
            <a href="mailto:deeptanshushuklaji@gmail.com" className="contact-btn email">
              Email
            </a>
            <a href="https://linkedin.com/in/potatomioo" className="contact-btn linkedin">
              LinkedIn
            </a>
            <a href="https://github.com/potatomioo" className="contact-btn github">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;