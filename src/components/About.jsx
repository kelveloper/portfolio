import React from 'react';

const About = () => {
    return (
        <section style={{
            padding: '20rem 2rem',
            // We want this to feel like part of the dark theme, 
            // but the parent might be light if we don't switch themes.
            // For now, let's rely on the App.jsx theme switching.
            // But just in case, we can enforce dark colors here if we want it to strictly be dark.
            color: 'var(--text-primary)', // Assuming we toggle back to dark mode
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: 'var(--accent)'
            }}>About Me</h2>

            {/* Card */}
            <div style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '24px',
                padding: '2.5rem',
                border: '1px solid var(--border-color)'
            }}>
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem',
                    color: 'var(--text-secondary)'
                }}>
                    I am an <strong>AI Product Builder</strong> focused on developing innovative solutions and identifying opportunities for automation.
                    My approach combines product thinking, user empathy, and deep technical understanding to build tools that drive real efficiency.
                </p>

                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    margin: 0,
                    color: 'var(--text-secondary)'
                }}>
                    As demonstrated by projects like <em>Domo AI</em> and <em>Comfort Comm AI Chatbot</em>, I have the hands-on execution capability to bring complex AI ideas to life.
                    If you're interested in building similar tools or just want to share ideas, let's connect! (Especially if you love crypto or turtles 🐢).
                </p>
            </div>


        </section>
    );
};

export default About;
