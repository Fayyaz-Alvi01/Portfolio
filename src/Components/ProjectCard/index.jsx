import { Button, Tag } from 'antd';
import { GithubOutlined, LinkOutlined, StarFilled } from '@ant-design/icons';
import './projectcard.scss';

export default function ProjectCard({ project, index }) {
  return (
    <div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="project-card__featured-badge">
          <StarFilled /> Featured
        </div>
      )}

      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__icon">
          {project.category === 'MERN' ? '🟢' : '🔵'}
        </div>
        <span className={`project-card__category ${project.category.toLowerCase()}`}>
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="project-card__title">{project.title}</h3>

      {/* Description */}
      <p className="project-card__desc">{project.description}</p>

      {/* Tech Stack */}
      <div className="project-card__tech">
        {project.tech.map((t) => (
          <Tag key={t} className="tech-pill">{t}</Tag>
        ))}
      </div>

      {/* Links */}
      <div className="project-card__links">
        <a href={project.github} target="_blank" rel="noreferrer">
          <Button
            icon={<GithubOutlined />}
            size="small"
            className="btn-ghost"
          >
            GitHub
          </Button>
        </a>
        <a href={project.live} target="_blank" rel="noreferrer">
          <Button
            icon={<LinkOutlined />}
            size="small"
            type="primary"
            className="btn-primary"
          >
            Live Demo
          </Button>
        </a>
      </div>
    </div>
  );
}