import { useState, useEffect } from 'react';

interface NavigationProps {
  onNavigateHire?: () => void;
  onNavigateHome?: () => void;
}

const Navigation = ({ onNavigateHire, onNavigateHome }: NavigationProps) => {
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
          {onNavigateHome ? (
            <li><button onClick={onNavigateHome} className="nav-link-glass">Home</button></li>
          ) : (
            <>
              <li><a href="#hero" className="nav-link-glass">Home</a></li>
              <li><a href="#projects" className="nav-link-glass">Projects</a></li>
              <li><a href="#services" className="nav-link-glass">Services</a></li>
              <li><a href="#about" className="nav-link-glass">About</a></li>
              <li><a href="#experience" className="nav-link-glass">Experience</a></li>
              <li><a href="#contact" className="nav-link-glass">Contact</a></li>
            </>
          )}
          {onNavigateHire && (
            <li><button onClick={onNavigateHire} className="nav-link-glass hire-nav-btn">Hire Me</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;