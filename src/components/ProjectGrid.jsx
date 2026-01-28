import React from 'react';
import comfortImg from '../assets/projects/comfort_communication.png';
import domoImg from '../assets/projects/domo_ai.png';
import bankDashImg from '../assets/projects/bank_dashboard.png';

const projects = [
    {
        title: 'Domo AI Sales Engineer',
        description: 'AI-powered sales demo platform that automates product demonstrations with conversational video AI. Built a SaaS application featuring embeddable video widgets, real-time lead qualification, and a custom knowledge base system. Integrates Tavus for interactive video avatars, ElevenLabs for voice synthesis, and Supabase for real-time data sync. Includes analytics dashboard with "Domo Score" lead scoring, multi-format document ingestion, and CRM-ready conversation transcripts.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'Tavus API', 'ElevenLabs', 'OpenAI', 'Render'],
        link: 'https://newdomo.onrender.com/',
        github: 'https://github.com/Valbows/NewDomo',
        video: 'https://www.loom.com/share/76f4e35d7c0a4631b4797b1cf26eddea',
        image: domoImg
    },
    {
        title: 'Comfort Comm AI Chatbot',
        description: 'AI-powered customer support chatbot for a multilingual telecom provider. Built a WordPress plugin with semantic FAQ matching using OpenAI embeddings and Supabase pgvector. Features tiered response logic (vector search → AI fallback), gap analysis to identify missing FAQs, conversation analytics, and CSAT feedback collection.',
        tags: ['Google Gemini API', 'Supabase', 'WordPress', 'OpenAI'],
        link: 'https://comfort-business.com/',
        github: 'https://github.com/kelveloper/comfort-comm-chatbot',
        video: 'https://drive.google.com/file/d/1mNuebndFLgKshfPG_pwkI_0_N_OSrOmJ/view?usp=sharing',
        techVideo: 'https://drive.google.com/file/d/1kcLNZPVlSlgGQRBpCFi_lJ5lXzd1KtrQ/view?usp=sharing',
        image: comfortImg
    },
    {
        title: 'Full-Stack Banking Management System',
        description: 'Full-stack banking system featuring comprehensive customer and account management with real-time analytics. Built with React (Material-UI) and Spring Boot, implementing manual DAO patterns for precise PostgreSQL control. Deployed on Render with production-grade CORS policies and environment configuration.',
        tags: ['React', 'Material-UI', 'Spring Boot', 'PostgreSQL', 'Java', 'Render', 'Maven'],
        link: 'https://banking-frontend-9cbl.onrender.com',
        github: 'https://github.com/kelveloper/BankTransaction',
        image: bankDashImg
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--bg-card)', // Adaptive card background
                borderRadius: '12px',
                border: '1px solid var(--border-color)', // Adaptive border for definition
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                color: 'var(--text-primary)', // Adaptive text
                overflow: 'hidden',
                position: 'relative'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            }}
        >
            {/* Image Section */}
            {project.image && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden' }}>
                    <div style={{
                        width: '100%',
                        height: '240px',
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#f0f0f0'
                    }}>
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease',
                                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </div>
                </a>
            )}

            <div style={{
                padding: '1.5rem 2rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }} className="project-card-content">
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                }}>{project.title}</h3>

                <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.5',
                    flex: 1
                }}>{project.description}</p>

                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.5rem'
                }} className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.85rem',
                            padding: '4px 8px',
                            backgroundColor: 'var(--bg-tag)',
                            borderRadius: '4px',
                            color: 'var(--text-secondary)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', gap: '1rem' }} className="project-links">
                    <div className="project-tooltip-container">
                        <a href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            // title removed for tooltip
                            style={{ display: 'inline-block', color: 'inherit', transition: 'transform 0.2s ease' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </a>
                        <span className="project-tooltip">{project.websiteLabel || "Website"}</span>
                    </div>

                    {project.github && (
                        <div className="project-tooltip-container">
                            <a href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                // title removed for tooltip
                                style={{ display: 'inline-block', color: 'inherit', transition: 'transform 0.2s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <span className="project-tooltip">GitHub</span>
                        </div>
                    )}
                    {project.video && (
                        <div className="project-tooltip-container">
                            <a href={project.video}
                                target="_blank"
                                rel="noopener noreferrer"
                                // title removed for tooltip
                                style={{ display: 'inline-block', color: 'inherit', transition: 'transform 0.2s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </a>
                            <span className="project-tooltip">Demo Video</span>
                        </div>
                    )}
                    {project.techVideo && (
                        <div className="project-tooltip-container">
                            <a href={project.techVideo}
                                target="_blank"
                                rel="noopener noreferrer"
                                // title removed for tooltip
                                style={{ display: 'inline-block', color: 'inherit', transition: 'transform 0.2s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </a>
                            <span className="project-tooltip">Technical Deep Dive</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectGrid = () => {
    return (
        <section id="work-section" style={{
            padding: '4rem 2rem 8rem',
            backgroundColor: 'transparent',
            color: 'inherit'
        }} className="project-section">
            <style>{`
                @media (max-width: 768px) {
                    .project-section {
                        padding: 2rem 1rem 4rem !important;
                    }
                    /* Center alignment for project cards on mobile */
                    .project-card-content {
                        align-items: center !important;
                        text-align: center !important;
                    }
                    .project-tags, .project-links {
                        justify-content: center !important;
                    }
                }
            `}</style>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '3rem',
                    color: 'var(--accent)',
                    textAlign: 'center'
                }}>
                    Proof of Work
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Smaller min-width for mobile
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div >
            </div >
        </section >
    );
};

export default ProjectGrid;
