
import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import HirePage from './components/HirePage';
import Footer from './components/Footer';
import './App.css';
import './glass-ui.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleNavigateToHire = () => {
    setCurrentPage('hire');
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (currentPage === 'hire') {
    return (
      <div className="App">
        <HirePage onNavigateHome={handleNavigateToHome} />
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation onNavigateHire={handleNavigateToHire} />
      <main>
        <Hero onNavigateToHire={handleNavigateToHire} />
        <Projects />
        <Services onNavigateToHire={handleNavigateToHire} />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
