import { Row, Col } from 'antd';
import {
  UserOutlined, BookOutlined,
  CodeOutlined, TrophyOutlined
} from '@ant-design/icons';
import profilePhoto from '../../../Assets/profile.jpeg';
import './about.scss';

const timeline = [
  {
    year: '2021',
    title: 'Started BS Software Engineering',
    desc: 'Enrolled at NTU Faisalabad — began learning programming fundamentals, OOP, and web basics.',
    icon: <BookOutlined />,
  },
  {
    year: '2022',
    title: 'Learned Web Fundamentals',
    desc: 'Mastered HTML, CSS, JavaScript, and Bootstrap. Built first static websites.',
    icon: <CodeOutlined />,
  },
  {
    year: '2023',
    title: 'Entered Full Stack Development',
    desc: 'Learned Node.js, Express, MongoDB. Started building MERN stack projects.',
    icon: <CodeOutlined />,
  },
  {
    year: '2024',
    title: 'Expanded to MEAN Stack',
    desc: 'Added Angular to skillset. Built dashboard projects and REST APIs with JWT auth.',
    icon: <TrophyOutlined />,
  },
  {
    year: '2025',
    title: 'Final Year — Open to Work',
    desc: 'Actively building portfolio projects, seeking internships, jobs, and freelance opportunities.',
    icon: <UserOutlined />,
  },
];

const stats = [
  { num: '4+', label: 'Projects Built' },
  { num: '2', label: 'Stacks: MERN & MEAN' },
  { num: '4', label: 'Years of Study' },
  { num: '∞', label: 'Lines of Code' },
];

export default function About() {
  return (
    <section className="about section-wrapper">
      <div className="about__header">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-sub">My journey, background & what drives me</p>
      </div>

      <Row gutter={[48, 48]}>
        <Col xs={24} lg={12}>
          <div className="about__bio">
            <div className="about__photo-card">
              <img src={profilePhoto} alt="Muhammad Fayyaz Ahmed" className="about__photo" />
            </div>
            <h3>Muhammad Fayyaz Ahmed</h3>
            <p className="role-tag">MERN & MEAN Stack Developer</p>
            <p className="bio-text">
              I'm a final year <strong>BS Software Engineering</strong> student at{' '}
              <strong>NTU Faisalabad</strong>, Pakistan. I specialize in building
              full-stack web applications using modern JavaScript technologies.
            </p>
            <p className="bio-text">
              My passion is writing clean, efficient code that solves real-world
              problems. I'm actively looking for my first developer role, internship,
              or freelance project where I can contribute and grow.
            </p>
            <p className="bio-text">
              When I'm not coding, I'm exploring new tools, contributing to GitHub,
              and sharpening my skills daily.
            </p>
            <div className="about__info-grid">
              <div className="info-item">
                <span className="info-label">📍 Location</span>
                <span className="info-value">Faisalabad, Pakistan</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎓 University</span>
                <span className="info-value">NTU Faisalabad</span>
              </div>
              <div className="info-item">
                <span className="info-label">📧 Email</span>
                <span className="info-value">fayyazalvi7@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">📱 Phone</span>
                <span className="info-value">0317 3554782</span>
              </div>
              <div className="info-item">
                <span className="info-label">🟢 WhatsApp</span>
                <span className="info-value">0317 3554782</span>
              </div>
              <div className="info-item">
                <span className="info-label">💼 Status</span>
                <span className="info-value available">Available for Work</span>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={12}>
          <div className="about__stats">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="about__timeline">
            <h4>My Journey</h4>
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
}