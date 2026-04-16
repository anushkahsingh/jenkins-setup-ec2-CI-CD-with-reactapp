import React, { useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact', cta: true },
];

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false);

  const handleLink = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrollY > 50 ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={e => handleLink(e, '#hero')}>
          &lt;Shadab /&gt;
        </a>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={link.cta ? 'navbar-cta' : ''}
                onClick={e => handleLink(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
