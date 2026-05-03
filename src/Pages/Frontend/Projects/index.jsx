import { useState } from 'react';
import { Button, Tag } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { projects } from '../../../Data/projects';
import './projects.scss';

const filters = ['All', 'MERN', 'MEAN'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section className="projects section-wrapper">
      <h2 className="section-title">My <span>Projects</span></h2>
      <p className="section-sub">Real-world full-stack applications I've built</p>

      <div className="projects__filters">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map((project, i) => (
          <div
            className={`project-card ${project.featured ? 'featured' : ''}`}
            key={project.id}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {project.featured && (
              <div className="featured-badge">⭐ Featured</div>
            )}
            <div className="project-card__header">
              <div className="project-icon">
                {project.category === 'MERN' ? '🟢' : '🔵'}
              </div>
              <span className={`category-tag ${project.category.toLowerCase()}`}>
                {project.category}
              </span>
            </div>

            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>

            <div className="project-card__tech">
              {project.tech.map(t => (
                <Tag key={t} className="tech-pill">{t}</Tag>
              ))}
            </div>

            <div className="project-card__links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button icon={<GithubOutlined />} size="small" className="project-btn project-btn--ghost">
                  GitHub
                </Button>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <Button icon={<LinkOutlined />} size="small" type="primary" className="project-btn project-btn--primary">
                  Live Demo
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}