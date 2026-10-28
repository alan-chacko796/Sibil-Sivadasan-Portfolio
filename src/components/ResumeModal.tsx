import React from 'react';
import { X, Download, ExternalLink, Printer, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, skillCategories, educationAndTraining, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-tertiary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              Resume Preview — Sibil Sivadasan
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '0.2rem 0.55rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--accent-emerald)',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              Verified ATS
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-secondary"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
              title="Print resume"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <a
              href={personalInfo.resumePdfUrl}
              download={personalInfo.resumeFilename}
              onClick={triggerConfetti}
              className="btn btn-primary"
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem' }}
              title="Download official PDF file"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="btn-icon"
              style={{ width: '2.2rem', height: '2.2rem' }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div
          style={{
            padding: '2.5rem',
            overflowY: 'auto',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.92rem',
            lineHeight: 1.6
          }}
          className="resume-preview-document"
        >
          {/* Document Header */}
          <div style={{ textAlign: 'center', paddingBottom: '1.5rem', borderBottom: '2px solid var(--border-light)' }}>
            <h1
              style={{
                fontSize: '1.9rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                marginBottom: '0.35rem',
                color: 'var(--text-primary)'
              }}
            >
              SIBIL SIVADASAN
            </h1>
            <div
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}
            >
              SOFTWARE TESTER
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.85rem',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)'
              }}
            >
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>github.com/sibil-sibii</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '0.35rem',
                marginBottom: '0.75rem'
              }}
            >
              ■ PROFILE SUMMARY
            </h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'justify', lineHeight: 1.65 }}>
              Computer Science graduate with knowledge in Manual Testing, Automation Testing, Java, Selenium WebDriver, TestNG, Maven,
              SQL, JMeter, Postman, Git and GitHub. Skilled in writing and executing test cases. Familiar with SDLC, STLC, Agile methodology
              and defect tracking using JIRA. Seeking a Software Testing role to apply my skills and gain hands-on industry experience.
            </p>
          </div>

          {/* Education & Certification */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '0.35rem',
                marginBottom: '0.75rem'
              }}
            >
              ■ EDUCATION & CERTIFICATION
            </h2>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>Bachelor of Computer Application</span>
                <span style={{ color: 'var(--text-accent)' }}>2023 - 2026</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>VLB Janakiammal College of Arts and Science</div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.85rem' }}>CGPA: 6.93/10</div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>5 Month offline Software Testing course</span>
                <span style={{ color: 'var(--accent-emerald)' }}>08-04-2026 - 08-09-2026</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>Zoople Technologies, Kochi</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '0.35rem',
                marginBottom: '0.75rem'
              }}
            >
              ■ TECHNICAL SKILLS
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.88rem' }}>
              <div>
                <strong>Manual Testing:</strong> Agile Methodology, Defect Life Cycle, STLC, SDLC, Test case and Test Scenario Design, Bug Tracking Tool - JIRA, Excel
              </div>
              <div>
                <strong>Automation Testing:</strong> Playwright with TypeScript, Selenium WebDriver, Core Java (OOPS Concepts), TestNG, Page Object Model (POM), Maven
              </div>
              <div>
                <strong>API & Performance:</strong> API Testing - Postman, Performance Testing – JMeter
              </div>
              <div>
                <strong>AI Tools:</strong> Antigravity, Claude AI, ChatGPT, Gemini
              </div>
              <div>
                <strong>Database & Tools:</strong> SQL, Git and GitHub
              </div>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '0.35rem',
                marginBottom: '0.75rem'
              }}
            >
              ■ PROJECTS
            </h2>

            {/* Project 1: OrangeHRM */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                1. OrangeHRM Test Automation Framework | TypeScript, Playwright, Anti-Gravity, POM
              </div>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.35rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Engineered a comprehensive end-to-end test automation framework using Playwright and TypeScript, implementing the Page Object Model (POM) architecture for scalable UI testing.</li>
                <li>Leveraged Anti-Gravity to accelerate test case generation, streamline framework setup, and automate end-to-end execution across key application workflows.</li>
                <li>Applied core OOP concepts—including encapsulation and modular class design—to build reusable page components, type-safe models, and maintainable test utilities.</li>
                <li>Ensured high test reliability and fast execution by utilizing Playwright’s auto-waiting capabilities, custom assertions, and asynchronous execution patterns to handle dynamic web elements.</li>
              </ul>
            </div>

            {/* Project 2: Selenium */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                2. Automation Testing Practice - Automation Project
              </div>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.35rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Automated web application testing using Java, Selenium WebDriver, TestNG, and Maven with Page Object Model.</li>
                <li>Automated and validated various web elements and user interactions.</li>
              </ul>
            </div>

            {/* Project 3: Sauce Demo */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                3. Sauce Demo (Swag Labs) E-Commerce Website - Manual Testing
              </div>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.35rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Analysed application requirements and designed and executed Test cases based on Functional, Performance, Usability and Compatibility Testing for Login, Product Listing, Cart and Checkout modules.</li>
                <li>Identified and documented defects.</li>
              </ul>
            </div>

            {/* Project 4: OBS Automobiles */}
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                4. OBS Automobiles Application - Manual Testing Project
              </div>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.35rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Analysed SRS document and prepared test cases for Customer, Service Provider, and Admin Module.</li>
                <li>Executed manual test cases for Login, Registration functionalities in the customer Module.</li>
                <li>Performed Smoke, Functional and UI Testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
