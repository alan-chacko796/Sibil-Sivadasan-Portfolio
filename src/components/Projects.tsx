import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Code2,
  FileCheck
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { projectsData, personalInfo } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'automation' | 'manual'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All QA Projects' },
    { id: 'automation', label: 'Automation Frameworks (Code)' },
    { id: 'manual', label: 'Manual QA & Test Suites' }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">Testing Projects & Frameworks</h2>
          <p className="section-subtitle">
            Real test automation frameworks, comprehensive manual test suites, and requirements analysis drawn from active repositories and industry engagements.
          </p>
        </div>

        {/* Dedicated Repository Space Banner */}
        <div
          className="card-glass"
          style={{
            marginBottom: '3rem',
            padding: '1.5rem 2rem',
            border: '1px solid var(--border-accent)',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.04) 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <GithubIcon size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Active GitHub Repositories Hub
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Explore complete source code, POM classes, and config files directly on GitHub.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.portfolioRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
                title="View Portfolio Repository on GitHub"
              >
                <Code2 size={15} />
                <span>Portfolio Repo</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personalInfo.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                title="View All Repositories on GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>Explore Sibil's GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap'
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  background: isActive ? 'var(--accent-gradient)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid transparent' : '1px solid var(--border-subtle)',
                  boxShadow: isActive ? 'var(--accent-glow)' : 'none'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => {
            const isAutomation = project.category === 'automation';

            return (
              <div
                key={project.id}
                className="card-glass"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2.25rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle top accent highlight */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: isAutomation
                      ? 'var(--accent-gradient)'
                      : 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                  }}
                />

                <div>
                  {/* Category Pill and Repo Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      gap: '0.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: isAutomation ? 'var(--text-accent)' : 'var(--accent-emerald)',
                        background: isAutomation ? 'rgba(99, 102, 241, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        border: `1px solid ${isAutomation ? 'var(--border-accent)' : 'rgba(16, 185, 129, 0.3)'}`
                      }}
                    >
                      {project.categoryLabel}
                    </span>

                    {project.testCoverageCount && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <FileCheck size={13} color="var(--accent-emerald)" />
                        {project.testCoverageCount}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      marginBottom: '0.45rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.3
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle / Tech Spec */}
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-accent)',
                      marginBottom: '1.15rem'
                    }}
                  >
                    {project.subtitle}
                  </div>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      marginBottom: '1.75rem'
                    }}
                  >
                    {project.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.85rem',
                          lineHeight: 1.5,
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color={isAutomation ? 'var(--accent-primary)' : 'var(--accent-emerald)'}
                          style={{ flexShrink: 0, marginTop: '2px' }}
                        />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights Chips */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '1.75rem'
                    }}
                  >
                    {project.keyHighlights.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack and View on GitHub Button */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {/* Tech stack pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="badge-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub CTA Button if available */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ width: '100%', fontSize: '0.88rem' }}
                      id={`project-github-btn-${project.id}`}
                    >
                      <GithubIcon size={16} />
                      <span>View on GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <div
                      style={{
                        padding: '0.65rem',
                        textAlign: 'center',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <span>Manual Test Case Design & JIRA Defect Tracker</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
