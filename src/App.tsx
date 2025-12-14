
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
