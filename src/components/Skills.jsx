import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { icon: '🌐', name: 'HTML / CSS', level: 95 },
  { icon: '⚡', name: 'JavaScript', level: 90 },
  { icon: '🐍', name: 'Python', level: 75 },
  { icon: '⚛️', name: 'React.js', level: 88 },
  { icon: '☁️', name: 'AWS / Cloud', level: 85 },
  { icon: '🐳', name: 'Docker / K8s', level: 82 },
  { icon: '🟢', name: 'Node.js / Express', level: 87 },
  { icon: '🗄️', name: 'MySQL / MongoDB', level: 83 },
  { icon: '🔁', name: 'CI/CD Pipelines', level: 88 },
  { icon: '🏗️', name: 'Terraform', level: 80 },
  { icon: '🔧', name: 'Nest.js / TypeScript', level: 78 },
  { icon: '📊', name: 'Monitoring / Logging', level: 75 },
];

function SkillCard({ skill, visible }) {
  return (
    <div className="skill-card">
      <span className="skill-icon">{skill.icon}</span>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${skill.level}%` : '0%' }}
        />
      </div>
      <div style={{
        marginTop: '6px',
        fontSize: '0.72rem',
        color: 'var(--text-muted)',
        fontFamily: 'Fira Code, monospace',
        textAlign: 'right',
      }}>
        {visible ? `${skill.level}%` : ''}
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <div className="badge">🛠️ Tech Stack</div>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">
          Significant aptitudes that will help me achieve your objectives and deliver excellence.
        </p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={i}
              style={{
                animation: visible ? `fadeInUp 0.5s ease ${i * 0.07}s both` : 'none',
              }}
            >
              <SkillCard skill={skill} visible={visible} />
            </div>
          ))}
        </div>

        {/* GitHub Pie Chart Section */}
        <div style={{
          marginTop: '60px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-glass)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
            GitHub Language Distribution
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '28px' }}>
            Based on public repositories
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { lang: 'JavaScript', pct: 42, color: '#f7df1e' },
              { lang: 'TypeScript', pct: 18, color: '#3178c6' },
              { lang: 'HTML/CSS', pct: 20, color: '#e34c26' },
              { lang: 'Python', pct: 12, color: '#3572A5' },
              { lang: 'Shell', pct: 8, color: '#89e051' },
            ].map(item => (
              <div key={item.lang} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: `conic-gradient(${item.color} 0% ${item.pct}%, var(--bg-glass) ${item.pct}% 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)',
                  fontFamily: 'Fira Code, monospace',
                  border: `3px solid ${item.color}22`,
                }}>
                  {item.pct}%
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  {item.lang}
                </span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, display: 'inline-block' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
