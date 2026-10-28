import React from 'react';
import { ArrowUp, Mail, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-primary)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand & Title */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.45rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.85rem'
                }}
              >
                SS
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Sibil Sivadasan
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '380px' }}>
              Software Tester & QA Automation Engineer specializing in Playwright, Selenium WebDriver, and STLC best practices.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#about" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>About</a>
            <a href="#skills" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Skills</a>
            <a href="#experience" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Experience</a>
            <a href="#projects" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Projects</a>
            <a href="#resume" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Resume</a>
            <a href="#contact" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}
            title="Scroll to top of page"
            id="footer-back-to-top-btn"
          >
            <ArrowUp size={15} />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={15} color="var(--accent-emerald)" />
            <span>Built with precision • Engineered for Software Quality Assurance</span>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a
              href={personalInfo.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}
            >
              <Mail size={14} />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
