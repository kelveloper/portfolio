import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import ChallengeMe from './components/ChallengeMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isInverted, setIsInverted] = useState(false); // "Do Not Touch" mode
  const [isTransitioning, setIsTransitioning] = useState(false); // For transition overlay
  const [overlayColor, setOverlayColor] = useState(''); // Lock color during transition

  const triggerDoNotTouch = () => {
    // 0. Lock the overlay color to the DESTINATION theme
    // Converting from Dark -> Light? Make curtain Light (#F9F8F4)
    // Converting from Light -> Dark? Make curtain Dark (#0a0e17)
    setOverlayColor(isDarkMode ? '#F9F8F4' : '#0a0e17');

    // 1. Start Transition (Fade In Overlay)
    setIsTransitioning(true);

    // 2. Wait for fade in, then scroll and toggle
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' }); // Instant scroll
      setIsInverted(prev => !prev);

      // 3. Small delay to ensure paint/scroll is done, then Fade Out
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 500); // Match CSS transition duration
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.4; // Adjusted trigger point to be closer to top

      const projectSection = document.getElementById('work-section');
      const aboutSection = document.getElementById('about-section');
      const challengeSection = document.getElementById('challenge-section');
      const contactSection = document.getElementById('contact-section');

      let baseDarkMode = true; // Default to dark

      // Logic: Dark -> Light (Projects) -> Dark (About) -> Light (Challenge) -> Dark (Contact)
      // Check Contact first (bottom up)
      if (contactSection && contactSection.getBoundingClientRect().top <= triggerPoint) {
        baseDarkMode = true;
      }
      // Check Challenge Me
      else if (challengeSection && challengeSection.getBoundingClientRect().top <= triggerPoint) {
        baseDarkMode = false;
      }
      // Check About
      else if (aboutSection && aboutSection.getBoundingClientRect().top <= triggerPoint) {
        baseDarkMode = true;
      }
      // Check Projects
      else if (projectSection && projectSection.getBoundingClientRect().top <= triggerPoint) {
        baseDarkMode = false;
      }
      // Default Hero
      else {
        baseDarkMode = true;
      }

      // Apply Inversion Logic: If inverted, flip the base theme
      setIsDarkMode(isInverted ? !baseDarkMode : baseDarkMode);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInverted]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="app-container">
      {/* Seamless Transition Overlay */}
      <div
        className={`transition-overlay ${isTransitioning ? 'active' : ''}`}
        style={{ backgroundColor: overlayColor }}
      />

      <Navbar />
      <Hero />
      <div id="work-section" className="alternating-section">
        <ProjectGrid />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="challenge-section">
        <ChallengeMe />
      </div>
      <Contact />
      <Footer onDoNotTouch={triggerDoNotTouch} />
    </div>
  );
}

export default App;
