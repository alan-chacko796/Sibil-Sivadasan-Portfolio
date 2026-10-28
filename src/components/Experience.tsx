import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationAndTraining } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic & Professional Track</span>
          </div>
          <h2 className="section-title">Education & Certification</h2>
          <p className="section-subtitle">
            Formal computer science degree coupled with intensive offline industry training in QA methodologies, automation, and defect tracking.
          </p>
        </div>

        {/* Timeline Layout */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '23px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-primary) 0%, rgba(99, 102, 241, 0.1) 100%)',
              zIndex: 0
            }}
            className="timeline-vertical-line"
            aria-hidden="true"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
            {educationAndTraining.map((item, idx) => {
              const isTraining = item.iconType === 'training';
              const Icon = isTraining ? Award : GraduationCap;

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '1.75rem',
                    alignItems: 'flex-start'
                  }}
                  className="timeline-entry"
                >
                  {/* Timeline Node Icon */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: isTraining ? 'rgba(16, 185, 129, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                      border: `2px solid ${isTraining ? 'var(--accent-emerald)' : 'var(--accent-primary)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isTraining ? 'var(--accent-emerald)' : 'var(--accent-primary)',
                      flexShrink: 0,
                      boxShadow: isTraining ? 'var(--accent-emerald-glow)' : 'var(--accent-glow)'
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Card Content */}
                  <div
                    className="card-glass"
                    style={{
                      flex: 1,
                      padding: '2rem'
                    }}
                  >
                    {/* Period and Tag */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: 'var(--text-accent)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(99, 102, 241, 0.12)',
                          border: '1px solid var(--border-accent)'
                        }}
                      >
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>

                      {item.scoreOrType && (
                        <div
                          style={{
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            color: isTraining ? 'var(--accent-emerald)' : 'var(--text-primary)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: 'var(--radius-full)',
                            background: isTraining ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${isTraining ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-subtle)'}`
                          }}
                        >
                          {item.scoreOrType}
                        </div>
                      )}
                    </div>

                    {/* Title & Institution */}
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '1rem',
                        fontWeight: 500
                      }}
                    >
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.institution}</span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={13} />
                        {item.location}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                      {item.description}
                    </p>

                    {/* Highlights bullet list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
