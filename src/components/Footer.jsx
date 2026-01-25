import React from 'react';

const Footer = ({ onDoNotTouch }) => {
    const [points, setPoints] = React.useState(0); // For valid react code
    const [isButtonHovered, setIsButtonHovered] = React.useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const footerNavLinks = ['Projects', 'About', 'Challenge Me', 'Contact'];

    return (
        <footer style={{
            padding: '4rem 2rem 2rem',
            textAlign: 'center',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            marginTop: 'auto',
            position: 'relative'
        }}>
            {/* Top Navigation */}
            <ul style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '4rem',
                listStyle: 'none',
                margin: '0 auto 2rem auto',
                padding: 0,
                fontSize: '1.3rem',
                fontWeight: '500',
                fontFamily: '"Inter", system-ui, sans-serif',
                flexWrap: 'wrap'
            }}>
                {footerNavLinks.map((item) => (
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
                                    const blockAlign = item === 'About' ? 'center' : 'start';
                                    element.scrollIntoView({ behavior: 'smooth', block: blockAlign });
                                }
                            }}
                            className="footer-nav-link"
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

            {/* Do Not Touch Button - Bottom Right */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    right: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
            >
                {/* The Physical Button */}
                <button
                    onClick={onDoNotTouch}
                    className="red-button"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#ff4444',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 0 #cc0000, 0 5px 10px rgba(0,0,0,0.3)', // 3D effect
                        transition: 'all 0.1s ease',
                        position: 'relative'
                    }}
                    onMouseDown={(e) => {
                        e.target.style.transform = 'translateY(4px)';
                        e.target.style.boxShadow = '0 0 0 #cc0000, 0 2px 5px rgba(0,0,0,0.3)';
                    }}
                    onMouseUp={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 0 #cc0000, 0 5px 10px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 0 #cc0000, 0 5px 10px rgba(0,0,0,0.3)';
                    }}
                />

                {/* External Text */}
                <span style={{
                    fontSize: '0.75rem',
                    color: '#888',
                    fontFamily: 'monospace',
                    letterSpacing: '1px',
                    opacity: isButtonHovered ? 0.8 : 0, // Only visible on hover
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                }}>
                    Do not touch.
                </span>
            </div>

            <p style={{ color: '#555', fontSize: '0.9rem' }}>
                Copyright © {new Date().getFullYear()} kelveloper. All Rights Reserved.
            </p>

            <style>{`
                .footer-nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: var(--accent);
                    transition: width 0.3s ease;
                }
                .footer-nav-link:hover::after {
                    width: 100%;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
