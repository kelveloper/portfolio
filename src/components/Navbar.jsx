import React, { useState, useRef } from 'react';
import InteractiveText from './InteractiveText';

const Navbar = () => {
    const [hoverCount, setHoverCount] = useState(0);
    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const resetTimerRef = useRef(null);

    const handleLogoHover = () => {
        if (showEasterEgg) return;

        setHoverCount(prev => {
            const newCount = prev + 1;
            if (newCount >= 5) {
                setShowEasterEgg(true);
                setTimeout(() => setShowEasterEgg(false), 1000);
                return 0;
            }
            return newCount;
        });

        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        resetTimerRef.current = setTimeout(() => setHoverCount(0), 500);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            padding: '2rem 5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            color: 'var(--text-primary)',
            margin: '0 auto',
            right: 0
        }}>
            {/* Logo */}
            <div
                onMouseEnter={handleLogoHover}
                style={{
                    fontSize: showEasterEgg ? '2rem' : '1.1rem',
                    fontWeight: '600',
                    letterSpacing: '-0.5px',
                    cursor: 'pointer',
                    width: '120px', // Fixed width for stability
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: showEasterEgg ? 'center' : 'flex-start',
                    height: '40px',
                    zIndex: 102 // Ensure logo is above mobile menu
                }}
            >
                {showEasterEgg ? (
                    <div style={{ display: 'flex', gap: '2px', fontFamily: '"Inter", sans-serif', color: 'var(--accent)', transform: 'translateX(15px)' }}>
                        <span style={{ animation: 'bounceUp 0.3s ease-in-out infinite alternate' }}>6</span>
                        <span style={{ animation: 'bounceDown 0.3s ease-in-out infinite alternate' }}>7</span>
                    </div>
                ) : (
                    <InteractiveText
                        text="kelveloper"
                        scrambleChars="67!@#$%^&*"
                        enableAutoGlitch={false}
                        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    />
                )}
            </div>

            {/* Hamburger Menu Icon */}
            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Links */}
            <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} style={{
                display: 'flex',
                gap: '3rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                fontSize: '1.25rem',
                fontWeight: '500',
                fontFamily: '"Inter", system-ui, sans-serif'
            }}>
                {['Projects', 'About', 'Challenge Me', 'Contact'].map((item) => (
                    <li key={item}>
                        <button
                            onClick={() => {
                                const map = {
                                    'Projects': 'work-section',
                                    'About': 'about-section',
                                    'Challenge Me': 'challenge-section',
                                    'Contact': 'contact-section'
                                };
                                const element = document.getElementById(map[item]);
                                if (element) {
                                    // "About" looks better centered, others align to top
                                    const blockAlign = item === 'About' ? 'center' : 'start';
                                    element.scrollIntoView({ behavior: 'smooth', block: blockAlign });
                                    setIsMobileMenuOpen(false); // Close menu on click
                                }
                            }}
                            className="nav-link"
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                cursor: 'pointer',
                                fontSize: 'inherit',
                                fontWeight: 'inherit',
                                padding: '0.5rem 0',
                                position: 'relative'
                            }}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
            <style>{`
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: var(--accent);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                @keyframes bounceUp {
                    0% { transform: translateY(3px); }
                    100% { transform: translateY(-3px); }
                }
                @keyframes bounceDown {
                    0% { transform: translateY(-3px); }
                    100% { transform: translateY(3px); }
                }
                @keyframes pulse {
                    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
                    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 0, 0, 0); }
                    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
                }
                @media (max-width: 768px) {
                    nav {
                        padding: 1.5rem !important; /* Slightly reduced padding */
                        justify-content: center !important; /* Center the logo */
                    }
                    /* Logo adjustment if needed */
                    nav > div:first-child {
                        /* text-align: center; if needed, but flex center handles it */
                    }

                    .hamburger {
                        display: flex !important;
                        flex-direction: column;
                        justify-content: space-around;
                        width: 2rem;
                        height: 2rem;
                        cursor: pointer;
                        z-index: 102;
                        position: absolute; /* Absolute position */
                        right: 1.5rem; /* Match padding */
                        top: 50%;
                        transform: translateY(-50%);
                    }
                    .line {
                        width: 2rem;
                        height: 0.25rem;
                            background: var(--text-primary);
                        border-radius: 10px;
                        transition: all 0.3s linear;
                        position: relative;
                        transform-origin: 1px;
                    }
                    .line.open:nth-child(1) {
                        transform: rotate(45deg);
                    }
                    .line.open:nth-child(2) {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    .line.open:nth-child(3) {
                        transform: rotate(-45deg);
                    }

                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: 0;
                        height: 100vh;
                        width: 100%;
                        background: var(--bg-primary);
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(100%);
                        transition: transform 0.3s ease-in-out;
                        z-index: 101;
                    }
                    .nav-links.open {
                        transform: translateX(0);
                    }
                    .nav-links li {
                        opacity: 0;
                        transition: opacity 0.5s ease-in-out;
                    }
                    .nav-links.open li {
                        opacity: 1;
                    }
                }
                .hamburger {
                    display: none;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
