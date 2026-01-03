import { useState } from 'react';

interface HirePageProps {
  onNavigateHome: () => void;
}

const HirePage = ({ onNavigateHome }: HirePageProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:8080/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
  
      alert("Message sent successfully 🚀");
      setFormData({
        name: '',
        email: '',
        projectDetails: '',
        message: ''
      });
    } catch (err) {
      alert("Something went wrong 😢");
      console.error(err);
    }
  };

  return (
    <div className="hire-page-sleek">
      <button onClick={onNavigateHome} className="back-button-sleek">
        ← Back to Portfolio
      </button>
      
      <div className="hire-container-sleek">
        <div className="hire-header-sleek">
          <h1 className="hire-title-sleek">Let's Work Together</h1>
          <p className="hire-subtitle-sleek">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="hire-main-sleek">
          <div className="contact-form-sleek">
            <form onSubmit={handleSubmit} className="form-sleek">
              <div className="form-row">
                <div className="form-group-sleek">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input-sleek"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group-sleek">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input-sleek"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group-sleek">
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className="form-textarea-sleek"
                  rows={4}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  required
                />
              </div>

              <div className="form-group-sleek">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea-sleek"
                  rows={3}
                  placeholder="Any additional details or questions..."
                />
              </div>

              <button type="submit" className="submit-button-sleek">
                Send Message
              </button>
            </form>
          </div>

          <div className="social-section-sleek">
            <h3 className="social-title-sleek">Connect with me</h3>
            <div className="social-grid-sleek">
              <a 
                href="https://twitter.com/deeptanshu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-sleek"
              >
                <span className="social-text-sleek">Twitter</span>
              </a>

              <a 
                href="https://github.com/potatomioo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-sleek"
              >
                <span className="social-text-sleek">GitHub</span>
              </a>

              <a 
                href="https://linkedin.com/in/potatomioo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-sleek"
              >
                <span className="social-text-sleek">LinkedIn</span>
              </a>
            </div>

            <div className="availability-sleek">
              <div className="status-text">
                <span className="status-main">Available for new projects</span>
                <span className="status-sub">Typically respond within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirePage;