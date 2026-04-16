import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p className="footer-text">
            © {year} <span>Md Shadab Azam Ansari</span>. Built with{' '}
            <span>⚛️ React</span> &amp; <span>❤️</span>
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a
              href="https://github.com/mdshadabazamansari"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none', transition: 'var(--transition)' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/md-shadab-azam-ansari"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none', transition: 'var(--transition)' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              style={{
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                borderRadius: '50%',
                width: '36px', height: '36px',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
