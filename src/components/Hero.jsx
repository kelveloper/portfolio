import React, { useState, useEffect } from 'react';
import devSetupImg from '../assets/isometric_dev_setup.png';
import devSetupImgLight from '../assets/isometric_dev_setup_light.png';
import profileImg from '../assets/profile.jpg';
import InteractiveText from './InteractiveText';

const Hero = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Observer to check for light-mode class on body
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDarkMode(!document.body.classList.contains('light-mode'));
                }
            });
        });

        observer.observe(document.body, { attributes: true });

        // Initial check
        setIsDarkMode(!document.body.classList.contains('light-mode'));

        return () => observer.disconnect();
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            // backgroundColor: 'var(--bg-primary)', // Removed to allow smooth body transition
            color: 'var(--text-primary)',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }} className="hero-content">

                {/* Left Column: Dev Setup (Swapped position) */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    animation: 'float 6s ease-in-out infinite'
                }} className="hero-image">
                    <img
                        src={isDarkMode ? devSetupImg : devSetupImgLight}
                        alt="Developer Setup"
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            filter: 'drop-shadow(0px 20px 40px rgba(0,0,0,0.5))',
                            transition: 'opacity 0.5s ease-in-out' // Smooth transition if feasible, though src swap is instant
                        }}
                    />
                </div>

                {/* Right Column: Text + Profile */}
                <div style={{
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <img src={profileImg} alt="Kelvin" style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '16px',
                        objectFit: 'cover',
                        flexShrink: 0,
                        filter: 'drop-shadow(0px 20px 40px rgba(0,0,0,0.5))',
                        animation: 'floatReverse 6s ease-in-out infinite', // Moves opposite to Dev Setup
                        marginBottom: '1rem'
                    }} />

                    <InteractiveText
                        text="Welcome."
                        as="h2"
                        enableAutoGlitch={true}
                        glitchInterval={7000}
                        scrambleChars="67!@#$%^&*"
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--accent)',
                            fontFamily: 'monospace',
                            marginBottom: '0.5rem'
                        }}
                    />

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        textAlign: 'center',
                        lineHeight: 1.1,
                        margin: 0,
                        marginBottom: '0.5rem'
                    }}>
                        Kelvin Saldana
                    </h1>

                    <h2 style={{
                        fontSize: 'clamp(1.3rem, 3.2vw, 1.6rem)', // Made bigger
                        fontWeight: '600',
                        color: 'var(--accent)',
                        textAlign: 'center',
                        margin: 0,
                        marginBottom: '0.5rem'
                    }}>
                        Crafting Digital Experiences with AI
                    </h2>

                    <h3 style={{
                        fontSize: '1.4rem', // Made bigger
                        fontWeight: '500',
                        color: '#8892b0',
                        textAlign: 'center',
                        margin: 0,
                        marginBottom: '2rem'
                    }}>
                        AI Enthusiast & Developer
                    </h3>

                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                        <button style={{
                            padding: '14px 32px',
                            background: 'var(--accent)',
                            border: 'none',
                            color: 'white',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                        }}
                            onClick={() => window.open('/kelvin_resume.pdf', '_blank')}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                            Download CV
                        </button>
                        <button style={{
                            padding: '14px 32px',
                            background: 'var(--accent)', // Same filled style as requested
                            border: 'none',
                            color: 'white',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                        }}
                            onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                            About Me
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
                        {/* LinkedIn */}
                        <div className="hero-tooltip-container">
                            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <span className="hero-tooltip">LinkedIn</span>
                        </div>

                        {/* GitHub */}
                        <div className="hero-tooltip-container">
                            <a href="https://github.com/kelveloper" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <span className="hero-tooltip">GitHub</span>
                        </div>

                        {/* X */}
                        <div className="hero-tooltip-container">
                            <a href="https://x.com/kelveloper" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <span className="hero-tooltip">X / Twitter</span>
                        </div>
                    </div>


                </div>

                {/* Hidden Computer Image (Kept in codebase) */}
                <div style={{ display: 'none' }}>
                    <img src={devSetupImg} alt="Dev Setup" />
                </div>

            </div>

            <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatReverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            text-align: center;
            margin-top: 4rem; /* Add spacing for fixed mobile nav or just visual breathing room */
          }
          .hero-image {
            order: -1;
            margin-bottom: 2rem;
          }
          /* Ensure title sizes are readable on mobile */
          h1 {
            font-size: 2.5rem !important;
          }
          h2 {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
