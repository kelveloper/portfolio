import React from 'react';

const ChallengeMe = () => {
    const features = [
        'Quick Turnaround',
        'Modern Tech Stack',
        'Clean Code'
    ];

    const scrollToContact = () => {
        const element = document.getElementById('contact-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="challenge-section" className="alternating-section" style={{
            padding: '6rem 2rem',
            textAlign: 'center',
            color: 'var(--text-primary)',
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} className="alternating-section challenge-section">
            <style>{`
                @media (max-width: 768px) {
                    .challenge-section {
                        padding: 4rem 1rem !important;
                    }
                }
            `}</style>
            {/* Subheading */}
            <h3 className="challenge-subheading" style={{
                fontSize: '1.2rem',
                fontWeight: '500',
                marginBottom: '0.5rem'
            }}>
                Ready to Collaborate?
            </h3>

            {/* Main Heading */}
            <h2 className="challenge-heading" style={{
                fontSize: '3rem',
                fontWeight: '700',
                marginBottom: '2.5rem'
            }}>
                Challenge Me
            </h2>

            {/* Card */}
            <div style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '24px',
                padding: '3rem',
                maxWidth: '800px',
                width: '100%',
                border: '1px solid var(--border-color)'
            }}>
                {/* Description */}
                <p style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    marginBottom: '2rem',
                    maxWidth: '700px',
                    margin: '0 auto 2rem'
                }}>
                    Got an interesting project idea? I'm always eager to take on new challenges
                    and collaborate on innovative solutions. Whether it's a simple app or a
                    complex system, I'm ready to put my skills to the test and create something!
                </p>

                {/* Features */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                }}>
                    {features.map((feature) => (
                        <div key={feature} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                color: 'var(--text-primary)'
                            }}>
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    onClick={scrollToContact}
                    style={{
                        backgroundColor: 'var(--accent)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    Let's Build Something
                </button>
            </div>
        </section>
    );
};

export default ChallengeMe;
