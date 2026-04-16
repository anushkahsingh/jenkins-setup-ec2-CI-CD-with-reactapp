import React from 'react';

const experiences = [
  {
    company: 'Excellence Education',
    role: 'Senior Consultant (DevOps) AWS – Contract',
    date: 'Jan 2025 – Present',
    description:
      'Mentored ~1000 students in Front-End, MERN Stack & AWS Cloud. Conducted coding challenges, preparing students for career transitions and real-world engineering roles.',
    tags: ['AWS', 'DevOps', 'MERN', 'Mentoring'],
  },
  {
    company: 'CODING SPOON',
    role: 'Instructor – Contract',
    date: 'Aug 2024 – Sep 2024',
    description:
      'Led AWS Cloud DevOps workshop at Rungta College for 1000+ students. Delivered interactive, hands-on training for beginners covering cloud fundamentals and deployment.',
    tags: ['AWS', 'Cloud', 'Training', 'Workshop'],
  },
  {
    company: 'POD INVEST',
    role: 'Software Engineer',
    date: 'Feb 2024 – Oct 2024',
    description:
      'Built APIs using Nest.js, TypeScript, CI/CD with GitHub Actions, deployed on EC2 with Nginx. Integrated CMS, MongoDB, and AWS services. Migrated infrastructure to AWS Graviton, cutting costs by 40%.',
    tags: ['Nest.js', 'TypeScript', 'GitHub Actions', 'EC2', 'MongoDB', 'AWS Graviton'],
  },
  {
    company: 'CAREER - SURVIVAL',
    role: 'Senior Software Engineer – Contract',
    date: 'Dec 2023 – Jan 2024',
    description:
      'Designed full-stack architecture and deployed serverless applications. Optimized real-time data processing pipelines using Lambda and Kinesis.',
    tags: ['Serverless', 'Lambda', 'Kinesis', 'Full Stack'],
  },
  {
    company: 'THE 10X ACADEMY',
    role: 'Mentor',
    date: 'Dec 2022 – Nov 2023',
    description:
      'Coached 1000+ students on Full Stack development and AWS tools through online sessions. Covered React, Node.js, databases, and cloud deployment.',
    tags: ['React', 'Node.js', 'AWS', 'Mentoring'],
  },
  {
    company: 'ZARA INFORISE',
    role: 'Web Developer',
    date: 'May 2021 – Feb 2022',
    description:
      'Built Admin Dashboard with React, Redux, Node, Express, and MongoDB. Designed RESTful APIs, improved DB performance, set up CI/CD pipelines and deployed to production.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'REST API', 'CI/CD'],
  },
];

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="badge">💼 Career</div>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey — building, shipping, and teaching across roles.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-date">{exp.date}</div>
                </div>
                <div className="exp-role">{exp.role}</div>
                <p className="exp-description">{exp.description}</p>
                <div className="project-tags" style={{ marginTop: '16px', marginBottom: 0 }}>
                  {exp.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
