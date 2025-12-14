import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation-glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-glass-container">
        <div className="nav-logo-glass">
          <span className="logo-text-glass">DS</span>
        </div>
        <ul className="nav-links-glass">
          <li><a href="#hero" className="nav-link-glass">Home</a></li>
          <li><a href="#projects" className="nav-link-glass">Projects</a></li>
          <li><a href="#services" className="nav-link-glass">Services</a></li>
          <li><a href="#about" className="nav-link-glass">About</a></li>
          <li><a href="#experience" className="nav-link-glass">Experience</a></li>
          <li><a href="#contact" className="nav-link-glass">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;