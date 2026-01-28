import React, { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('kelvin.saldana@pursuit.org');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact-section" style={{
            padding: '4rem 2rem 5rem', // Added large bottom padding to lift it up
            textAlign: 'center',
            // backgroundColor: 'var(--bg-dark)', // Removed to allow global theme transition
            color: 'var(--text-primary)',
            position: 'relative',
            minHeight: '76vh', // Ensure it fills the screen
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // Push to bottom, but padding lifts it
            alignItems: 'center'
        }} className="contact-section">
            <style>{`
                @media (max-width: 768px) {
                    .contact-section {
                        padding: 4rem 1rem 6rem !important; /* increased bottom padding for mobile browsers */
                        justify-content: center !important;
                        min-height: auto !important; /* let it grow naturally */
                    }
                }
            `}</style>
            {/* Contact Heading */}
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                    fontSize: '1rem',
                    color: 'var(--text-primary)', // White in dark mode
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Get in Touch
                </h3>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--accent)', // Blue in dark mode
                    margin: 0
                }}>
                    Contact Me
                </h2>
            </div>

            {/* Contact Pill Box */}
            <div className="contact-pill" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2.5rem',
                padding: '1rem 3rem',
                borderRadius: '50px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-card)',
                marginBottom: '3rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {/* Email */}
                <div className="contact-tooltip-container">
                    <button onClick={handleCopyEmail} className="contact-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </button>
                    <span className="contact-tooltip">{copied ? 'Copied!' : 'Email'}</span>
                </div>

                {/* LinkedIn */}
                <div className="contact-tooltip-container">
                    <a href="https://www.linkedin.com/in/kelvinsaldana/" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    <span className="contact-tooltip">LinkedIn</span>
                </div>

                {/* GitHub */}
                <div className="contact-tooltip-container">
                    <a href="https://github.com/kelveloper" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                    <span className="contact-tooltip">GitHub</span>
                </div>

                {/* X */}
                <div className="contact-tooltip-container">
                    <a href="https://x.com/kelveloper" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                    <span className="contact-tooltip">X / Twitter</span>
                </div>
            </div>

            <style>{`
                .contact-item {
                    color: var(--text-primary);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .contact-item:hover {
                    color: var(--accent);
                    transform: translateY(-2px);
                }
                @media (max-width: 600px) {
                    .contact-pill {
                        flex-direction: row; /* Keep row even on mobile for icons */
                        gap: 1.5rem;
                        padding: 1.5rem;
                        border-radius: 50px; /* Keep pill shape */
                        width: auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
