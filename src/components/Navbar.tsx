import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Scroll progress
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'resume', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          background: isScrolled
            ? theme === 'dark'
              ? 'rgba(9, 13, 22, 0.88)'
              : 'rgba(248, 250, 252, 0.88)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          paddingTop: isScrolled ? '0.75rem' : '1.25rem',
          paddingBottom: isScrolled ? '0.75rem' : '1.25rem'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '-0.02em',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.95rem',
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.4)'
              }}
            >
              SS
            </div>
            <div>
              <div style={{ color: 'var(--text-primary)', lineHeight: 1.15 }}>Sibil Sivadasan</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-accent)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span className="pulse-indicator" style={{ width: '6px', height: '6px' }}></span>
                QA Engineer
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'var(--bg-card)',
              padding: '0.35rem 0.6rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(8px)'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                    border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="btn-icon"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Quick Resume CTA */}
            <button
              onClick={onOpenResumeModal}
              className="btn btn-secondary desktop-only"
              style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
              title="Preview Sibil's Resume"
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>

            {/* Get in Touch CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary desktop-only"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
            >
              <Send size={15} />
              <span>Contact</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon mobile-only"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: theme === 'dark' ? 'rgba(9, 13, 22, 0.98)' : 'rgba(255, 255, 255, 0.98)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '1.25rem 1.5rem',
              backdropFilter: 'blur(20px)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: activeSection === link.id ? 'var(--text-accent)' : 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: activeSection === link.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Sparkles size={16} color="var(--accent-primary)" />}
              </button>
            ))}

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.7rem' }}
              >
                <FileText size={16} />
                <span>Resume</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.7rem' }}
              >
                <Send size={16} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Responsive helper styling */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-only { display: inline-flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 859px) {
          .desktop-nav { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-only { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
};
