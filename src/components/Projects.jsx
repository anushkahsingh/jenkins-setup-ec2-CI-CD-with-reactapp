import React, { useState } from 'react';

const allProjects = [
  {
    icon: '🏗️',
    name: 'React App Jenkins CI/CD on AWS',
    description:
      'Full CI/CD pipeline deploying a React app to AWS EC2 with Jenkins. Auto-deploys on every GitHub push via webhooks, served by Nginx on Amazon Linux.',
    tags: ['Jenkins', 'AWS EC2', 'React', 'Nginx', 'CI/CD'],
    category: 'DevOps',
    github: 'https://github.com/mdshadabazamansari',
  },
  {
    icon: '☁️',
    name: 'AWS Cloud Infrastructure with Terraform',
    description:
      'Infrastructure-as-Code project provisioning EC2, S3, RDS, and VPC on AWS using Terraform modules. Includes auto-scaling groups and load balancers.',
    tags: ['Terraform', 'AWS', 'IaC', 'EC2', 'S3'],
    category: 'Cloud',
    github: 'https://github.com/mdshadabazamansari',
  },
  {
    icon: '🐳',
    name: 'Dockerized MERN Stack App',
    description:
      'Full-stack MERN application containerized with Docker Compose. Includes MongoDB, Express API, React frontend, and Nginx reverse proxy.',
    tags: ['Docker', 'MongoDB', 'React', 'Node.js', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/mdshadabazamansari',
  },
  {
    icon: '⚡',
    name: 'Serverless API with Lambda & Kinesis',
    description:
      'Serverless real-time data processing pipeline using AWS Lambda, Kinesis Streams, API Gateway, and DynamoDB for high-throughput event ingestion.',
    tags: ['Lambda', 'Kinesis', 'API Gateway', 'DynamoDB', 'Serverless'],
    category: 'Cloud',
    github: 'https://github.com/mdshadabazamansari',
  },
  {
    icon: '⚙️',
    name: 'Kubernetes Cluster Deployment',
    description:
      'Deployed a microservices application on Kubernetes with Helm charts, HPA, and Ingress controller. Configured rolling updates and health checks.',
    tags: ['Kubernetes', 'Helm', 'Docker', 'Microservices'],
    category: 'DevOps',
    github: 'https://github.com/mdshadabazamansari',
  },
  {
    icon: '🎓',
    name: 'Learning Management System (LMS)',
    description:
      'Moodle-inspired LMS with user authentication, quiz engine, progress tracking, and admin dashboard built with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Auth', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/mdshadabazamansari',
    live: 'https://md-shadab-azam-ansari.vercel.app',
  },
  {
    icon: '📊',
    name: 'Admin Dashboard with React + Redux',
    description:
      'Feature-rich admin dashboard with charts, user management, REST API integration, state management via Redux, and responsive design.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'REST API'],
    category: 'Full Stack',
    github: 'https://github.com/mdshadabazamansari',
  },
  {
    icon: '🔗',
    name: 'NestJS API with GitHub Actions',
    description:
      'Production-grade REST API using Nest.js, TypeScript, and MongoDB. CI/CD via GitHub Actions, deployed to AWS EC2 with Nginx reverse proxy.',
    tags: ['Nest.js', 'TypeScript', 'GitHub Actions', 'MongoDB', 'AWS'],
    category: 'DevOps',
    github: 'https://github.com/mdshadabazamansari',
  },
  {
    icon: '🌐',
    name: 'Portfolio Website',
    description:
      'Personal developer portfolio built with React featuring dark mode, smooth animations, and deployed on Vercel with continuous deployment pipeline.',
    tags: ['React', 'CSS', 'Vercel', 'Responsive'],
    category: 'Full Stack',
    github: 'https://github.com/mdshadabazamansari',
    live: 'https://md-shadab-azam-ansari.vercel.app',
  },
];

const categories = ['All', 'Full Stack', 'Cloud', 'DevOps'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="badge">🚀 Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          20+ projects delivered — here are some highlights across cloud, DevOps, and full stack.
        </p>

        {/* Filter tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '10px',
          marginBottom: '48px', flexWrap: 'wrap',
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 22px',
                borderRadius: '50px',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent-primary)' : 'var(--border-glass)',
                background: activeCategory === cat ? 'rgba(108,99,255,0.15)' : 'var(--bg-glass)',
                color: activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((proj, i) => (
            <div
              className="project-card"
              key={proj.name}
              style={{ animation: `fadeInUp 0.5s ease ${i * 0.08}s both` }}
            >
              <div className="project-icon">{proj.icon}</div>
              <h3 className="project-name">{proj.name}</h3>
              <p className="project-description">{proj.description}</p>
              <div className="project-tags">
                {proj.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="https://github.com/mdshadabazamansari"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
