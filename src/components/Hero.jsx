import React, { useEffect, useRef } from 'react';

const pills = [
  { label: 'AWS / Cloud', emoji: '☁️' },
  { label: 'Docker / K8s', emoji: '🐳' },
  { label: 'React.js', emoji: '⚛️' },
  { label: 'CI/CD', emoji: '🚀' },
];

function TypeWriter({ words }) {
  const el = useRef(null);
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout;
    function tick() {
      const word = words[wordIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        if (el.current) el.current.textContent = word.slice(0, charIndex.current);
        if (charIndex.current === word.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        charIndex.current--;
        if (el.current) el.current.textContent = word.slice(0, charIndex.current);
        if (charIndex.current === 0) {
          deleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 60 : 90);
    }
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [words]);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
      <span ref={el} />
      <span style={{
        display: 'inline-block', width: '2px', height: '1.1em',
        background: 'var(--accent-secondary)', marginLeft: '2px',
        animation: 'blink 1s step-end infinite', verticalAlign: 'middle'
      }} />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          {/* LEFT */}
          <div className="hero-text">
            <p className="hero-greeting">Hello, World! 👋</p>

            <h1 className="hero-name">
              Anushka Singh<br />
              <span style={{ background: 'var(--gradient-hero)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Azam Ansari
              </span>
            </h1>

            <p className="hero-title">
              <TypeWriter words={[
                'Software Engineer',
                'Cloud Engineer',
                'DevOps Engineer',
                'Full Stack Developer',
              ]} />
            </p>

            <p className="hero-description">
              Cloud &amp; DevOps Engineer ☁️ with expertise in designing, deploying,
              and automating scalable solutions on AWS using Docker, Kubernetes,
              Terraform, and CI/CD pipelines. Also proficient in Node.js, React.js,
              Express, and MongoDB for full-stack solutions integrated with AWS services.
            </p>

            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-value">20+</div>
                <div className="metric-label">Projects</div>
              </div>
              <div className="metric">
                <div className="metric-value">5+</div>
                <div className="metric-label">Years Exp</div>
              </div>
              <div className="metric">
                <div className="metric-value">1000+</div>
                <div className="metric-label">Students Mentored</div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                💬 Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                🚀 View Projects
              </a>
            </div>
          </div>

          {/* RIGHT - Avatar */}
          <div className="hero-visual">
            <div className="avatar-wrapper">
              <div className="avatar-ring" />
              <div className="avatar-ring avatar-ring-2" />
              <div className="avatar-circle">👨‍💻</div>

              {pills.map((pill, i) => (
                <div className="tech-pill" key={i}>
                  <span>{pill.emoji}</span> {pill.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
