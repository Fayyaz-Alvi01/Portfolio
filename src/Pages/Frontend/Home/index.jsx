import { Button, Tag } from 'antd';
import { GithubOutlined, LinkedinOutlined,
         ArrowRightOutlined, DownloadOutlined, WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './home.scss';

const techTags = ['MongoDB','Express.js','React','Node.js','Angular','Bootstrap','SCSS','Git'];

export default function Home() {
  return (
    <main className="home">
      {/* Background orbs */}
      <div className="home__orb orb-1" />
      <div className="home__orb orb-2" />

      <div className="home__content">
        <div className="home__badge">
          <span className="dot" /> Available for Work
        </div>

        <h1 className="home__title">
          Hi, I'm <span className="gradient-text">Muhammad</span><br />
          <span className="gradient-text">Fayyaz Ahmed</span>
        </h1>

        <h2 className="home__subtitle">
          MERN & MEAN Stack Developer
        </h2>

        <p className="home__desc">
          Final year BS Software Engineering student at <strong>NTU Faisalabad</strong>.
          I build fast, scalable, and beautiful full-stack web applications —
          ready for your next project or team.
        </p>

        <div className="home__actions">
          <Link to="/projects">
            <Button type="primary" size="large" icon={<ArrowRightOutlined />}
              iconPosition="end" className="home-btn home-btn--primary">
              View My Work
            </Button>
          </Link>
          <a href="/Fayyaz_CV_Final.pdf" target="_blank" rel="noreferrer">
            <Button size="large" icon={<DownloadOutlined />} className="home-btn home-btn--ghost">
              Download CV
            </Button>
          </a>
        </div>

        <div className="home__socials">
          <a href="https://github.com/Fayyaz-Alvi01" target="_blank" rel="noreferrer"
            className="social-btn"><GithubOutlined /> GitHub</a>
          <a href="https://www.linkedin.com/in/muhammad-fayyaz-ahmed-b486a33ab" target="_blank" rel="noreferrer"
            className="social-btn"><LinkedinOutlined /> LinkedIn</a>
          <a href="https://wa.me/923173554782" target="_blank" rel="noreferrer" className="social-btn">
            <WhatsAppOutlined /> WhatsApp
          </a>
          <a href="tel:+923173554782" className="social-btn">
            <PhoneOutlined /> 0317 3554782
          </a>
          <a href="mailto:fayyazalvi7@gmail.com" className="social-btn">
            ✉ fayyazalvi7@gmail.com
          </a>
        </div>

        <div className="home__tags">
          {techTags.map(t => (
            <Tag key={t} className="tech-tag">{t}</Tag>
          ))}
        </div>
      </div>

      {/* Floating code card */}
      <div className="home__visual">
        <div className="code-card">
          <div className="code-card__dots">
            <span /><span /><span />
          </div>
          <pre>{`const developer = {
  name: "Fayyaz Ahmed",
  role: "Full Stack Dev",
  stacks: ["MERN", "MEAN"],
  university: "NTU Faisalabad",
  status: "open_to_work",
  passion: "clean code 🚀"
};`}</pre>
        </div>
      </div>
    </main>
  );
}