import React from 'react';
import {
  User,
  GraduationCap,
  Award,
  ShieldCheck,
  Target,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const principles = [
    {
      icon: Target,
      title: 'Defect Prevention over Detection',
      description: 'Analyzing requirements early in the SDLC/STLC lifecycle to eliminate ambiguities before they manifest in production code.'
    },
    {
      icon: Layers,
      title: 'Scalable Page Object Model (POM)',
      description: 'Designing modular, reusable page components and robust assertions that make automated test suites resilient against UI changes.'
    },
    {
      icon: Sparkles,
      title: 'Modern AI-Assisted Testing',
      description: 'Leveraging AI tools like Antigravity, Claude, and ChatGPT to streamline framework setup, generate edge cases, and boost test coverage.'
    },
    {
      icon: ShieldCheck,
      title: 'Rigorous Multi-Layer Verification',
      description: 'Combining thorough manual exploratory & functional testing with fast Playwright/Selenium regression suites and Postman API checks.'
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Dedicated to Engineering Quality</h2>
          <p className="section-subtitle">
            A disciplined Computer Science graduate with hands-on expertise in automation, manual test design, and defect management.
          </p>
        </div>

        {/* Main Editorial Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
          className="about-grid"
        >
          {/* Left Column: Detailed Bio */}
          <div
            className="card-glass"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ color: 'var(--accent-primary)' }}>■</span>
                Professional Profile
              </h3>

              <p style={{ fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                I am a <strong>Computer Science graduate</strong> with deep foundational knowledge in both <strong>Manual Testing</strong> and <strong>Automation Testing</strong>. My background spans building automated test frameworks using <strong>Playwright with TypeScript</strong> and <strong>Selenium WebDriver with Java</strong>, alongside executing API testing with <strong>Postman</strong> and performance analysis using <strong>Apache JMeter</strong>.
              </p>

              <p style={{ fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                Following my BCA degree from <strong>VLB Janakiammal College of Arts and Science</strong> (CGPA: 6.93/10), I completed an intensive 5-month offline Software Testing course at <strong>Zoople Technologies, Kochi</strong>. There, I gained exhaustive practical exposure to the <strong>Software Development Life Cycle (SDLC)</strong>, <strong>Software Testing Life Cycle (STLC)</strong>, <strong>Agile Scrum methodology</strong>, and industry-standard defect tracking with <strong>JIRA</strong>.
              </p>

              <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                My career focus is joining a forward-thinking engineering team as a <strong>Software Tester / QA Engineer</strong> where I can apply my skills in test case design, automation architecture, and AI-assisted QA workflows to ensure reliable, high-performing software releases.
              </p>
            </div>

            {/* Quick Education & Training Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
              className="about-credentials"
            >
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0
                  }}
                >
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>BCA (2023 - 2026)</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>VLB Janakiammal College</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-accent)', fontWeight: 600 }}>CGPA: 6.93 / 10</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)',
                    flexShrink: 0
                  }}
                >
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>5-Month QA Course</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Zoople Technologies, Kochi</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>08/04/2026 – 08/09/2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: QA Pillars / Principles */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem'
            }}
          >
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="card-glass"
                  style={{
                    padding: '1.35rem 1.6rem',
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid var(--border-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 540px) {
          .about-credentials {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
