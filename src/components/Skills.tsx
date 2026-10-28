import React, { useState } from 'react';
import {
  Wrench,
  PlayCircle,
  CheckSquare,
  Server,
  Cpu,
  Database,
  Layers,
  Code2,
  Terminal,
  GitBranch
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'Automation Testing', label: 'Automation Testing' },
    { id: 'Manual Testing & QA Lifecycle', label: 'Manual & STLC' },
    { id: 'API & Performance Testing', label: 'API & Performance' },
    { id: 'AI Tools & QA Acceleration', label: 'AI QA Tools' },
    { id: 'Database & Tools', label: 'Databases & Tools' }
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'PlayCircle':
        return <PlayCircle size={22} />;
      case 'CheckSquare':
        return <CheckSquare size={22} />;
      case 'Server':
        return <Server size={22} />;
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Database':
        return <Database size={22} />;
      default:
        return <Layers size={22} />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeCategory);

  return (
    <section id="skills" className="section-wrapper" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Curated QA toolkit grounded in modern automated testing architectures, rigorous manual verification methodologies, and API validation.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem'
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
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

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
              }}
            >
              <div>
                {/* Header of Category */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
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
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {category.description}
                </p>

                {/* Skill Pills list */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        transition: 'all var(--transition-fast)'
                      }}
                      className="skill-pill-item"
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span
                          style={{
                            fontSize: '0.68rem',
                            padding: '0.15rem 0.4rem',
                            borderRadius: '4px',
                            background: 'rgba(99, 102, 241, 0.18)',
                            color: 'var(--text-accent)',
                            fontWeight: 600
                          }}
                        >
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-pill-item:hover {
          border-color: var(--border-accent) !important;
          background: rgba(99, 102, 241, 0.08) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
