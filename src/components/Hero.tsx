import React, { useState } from 'react';
import {
  FileText,
  FolderGit2,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Check,
  ChevronDown
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { personalInfo, stats } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToResume = () => {
    const el = document.getElementById('resume');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '3.5rem',
        position: 'relative'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', width: 'fit-content' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--accent-emerald)',
                  boxShadow: 'var(--accent-emerald-glow)'
                }}
              >
                <span className="pulse-indicator" />
                <span>Available for Software Testing & QA Roles</span>
              </div>
            </div>

            {/* Name & Title */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.75rem'
                }}
              >
                Hi, I'm <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{personalInfo.name}</span>
              </h1>
              <div
                style={{
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.55rem)',
                  fontWeight: 600,
                  color: 'var(--text-accent)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.01em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}
              >
                <span>{personalInfo.title}</span>
              </div>
            </div>

            {/* Introduction paragraph */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                maxWidth: '620px',
                color: 'var(--text-secondary)'
              }}
            >
              {personalInfo.summary}
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '0.75rem',
                alignItems: 'center'
              }}
            >
              <button
                onClick={handleScrollToResume}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.6rem', fontSize: '0.96rem' }}
                id="hero-view-resume-btn"
              >
                <FileText size={18} />
                <span>View My Resume</span>
              </button>

              <button
                onClick={handleScrollToProjects}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem', fontSize: '0.96rem' }}
                id="hero-explore-projects-btn"
              >
                <FolderGit2 size={18} />
                <span>Explore My Projects</span>
              </button>
            </div>

            {/* Contact Pills & Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '1.25rem',
                alignItems: 'center'
              }}
            >
              {/* GitHub */}
              <a
                href={personalInfo.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="badge-tag"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
                title="View Sibil's GitHub profile"
              >
                <GithubIcon size={15} />
                <span>github.com/sibil-sibii</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>

              {/* Email with copy */}
              <button
                onClick={handleCopyEmail}
                className="badge-tag"
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  borderColor: copiedEmail ? 'var(--accent-emerald)' : undefined,
                  color: copiedEmail ? 'var(--accent-emerald)' : undefined
                }}
                title="Click to copy email address"
              >
                {copiedEmail ? <Check size={14} /> : <Mail size={14} />}
                <span>{copiedEmail ? 'Email Copied!' : personalInfo.email}</span>
                {!copiedEmail && <Copy size={12} style={{ opacity: 0.6 }} />}
              </button>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="badge-tag"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
              >
                <Phone size={14} />
                <span>{personalInfo.phone}</span>
              </a>

              {/* Location */}
              <div
                className="badge-tag"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
              >
                <MapPin size={14} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px'
              }}
            >
              {/* Decorative Background Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '32px',
                  background: 'var(--accent-gradient)',
                  opacity: 0.35,
                  filter: 'blur(28px)',
                  zIndex: 0
                }}
                aria-hidden="true"
              />

              {/* Outer Glass Card */}
              <div
                className="card-glass"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '1rem',
                  borderRadius: '28px',
                  border: '1px solid var(--border-light)'
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    aspectRatio: '3 / 4',
                    background: 'var(--bg-tertiary)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  <img
                    src={personalInfo.profileImage}
                    alt="Sibil Sivadasan - Software Tester & QA Engineer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(9, 13, 22, 0.75) 0%, rgba(9, 13, 22, 0) 50%)',
                      pointerEvents: 'none'
                    }}
                  />
                  {/* Inner Label */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(9, 13, 22, 0.8)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(255, 255, 255, 0.12)'
                    }}
                  >
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.88rem' }}>Sibil Sivadasan</div>
                      <div style={{ color: 'var(--text-accent)', fontSize: '0.72rem' }}>BCA Graduate • Zoople Trained</div>
                    </div>
                    <span className="badge-tag" style={{ background: 'rgba(99, 102, 241, 0.25)', borderColor: 'var(--border-accent)', color: '#ffffff' }}>
                      QA Pro
                    </span>
                  </div>
                </div>

                {/* Floating Experience Pill (Top-Right) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    right: '-14px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.5rem 1rem',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    zIndex: 2
                  }}
                >
                  <ShieldCheck size={16} color="var(--accent-primary)" />
                  <span>Manual & Automation</span>
                </div>

                {/* Floating POM badge (Bottom-Left) */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-14px',
                    left: '-14px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.5rem 1rem',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    zIndex: 2
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>POM Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div
          style={{
            marginTop: '4.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {stats.map((s, index) => (
            <div
              key={index}
              className="card-glass"
              style={{
                padding: '1.25rem 1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
