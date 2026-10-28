import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Award,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal }) => {
  const handleDownloadConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="resume" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">
            Download or view my verified, ATS-compliant resume outlining full educational background, technical skills, and testing project deliverables.
          </p>
        </div>

        {/* Main Resume Showcase Card */}
        <div
          className="card-glass resume-card-container"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          {/* Subtle Ambient Background Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-10%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'center'
            }}
            className="resume-grid"
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent-emerald)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  marginBottom: '1rem'
                }}
              >
                <CheckCircle2 size={14} />
                <span>Verified PDF • Up to Date</span>
              </div>

              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)'
                }}
              >
                Sibil Sivadasan — QA Resume
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem'
                }}
              >
                Comprehensive curriculum vitae summarizing my BCA degree, 5-month offline QA course at Zoople Technologies, and hands-on frameworks in Playwright (TypeScript) and Selenium WebDriver (Java).
              </p>

              {/* Highlights Chips */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.85rem',
                  marginBottom: '2rem'
                }}
                className="resume-highlights-grid"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <ShieldCheck size={16} color="var(--accent-primary)" />
                  <span>Manual & Automation</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <GraduationCap size={16} color="var(--accent-primary)" />
                  <span>BCA (6.93 CGPA)</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <Award size={16} color="var(--accent-emerald)" />
                  <span>Zoople QA Trained</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>JIRA, Postman & JMeter</span>
                </div>
              </div>

              {/* Action Buttons: Download PDF, View PDF, Preview In-Page */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                {/* Download PDF Button */}
                <a
                  href={personalInfo.resumePdfUrl}
                  download={personalInfo.resumeFilename}
                  onClick={handleDownloadConfetti}
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
                  id="download-resume-pdf-btn"
                  title="Download Sibil Sivadasan's Resume as PDF"
                >
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </a>

                {/* View Resume in new tab */}
                <a
                  href={personalInfo.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
                  id="view-resume-tab-btn"
                  title="Open Resume PDF in New Tab"
                >
                  <ExternalLink size={17} />
                  <span>View in Tab</span>
                </a>

                {/* Interactive In-Page Viewer */}
                <button
                  onClick={onOpenModal}
                  className="btn btn-outline"
                  style={{ padding: '0.85rem 1.4rem', fontSize: '0.95rem' }}
                  id="preview-resume-modal-btn"
                  title="Preview Full Resume on Page"
                >
                  <Eye size={17} />
                  <span>Quick Preview</span>
                </button>
              </div>
            </div>

            {/* Right Mini Preview Card */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {/* Mini PDF Header mock */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    PDF • 1 Page
                  </span>
                </div>

                <div style={{ textAlign: 'center', padding: '0.75rem 0' }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                    SIBIL SIVADASAN
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', marginTop: '0.15rem' }}>
                    Software Tester
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <div style={{ height: '6px', width: '85%', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px' }} />
                  <div style={{ height: '6px', width: '95%', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px' }} />
                  <div style={{ height: '6px', width: '70%', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px' }} />
                </div>

                <div
                  style={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    border: '1px solid var(--border-accent)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Direct File Download
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Sibil_Sivadasan_Resume.pdf
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.6rem', fontSize: '0.82rem' }}
                >
                  <Eye size={14} />
                  <span>Click to Expand</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .resume-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
          }
        }
        @media (max-width: 500px) {
          .resume-highlights-grid {
            grid-template-columns: 1fr !important;
          }
          .resume-card-container {
            padding: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
