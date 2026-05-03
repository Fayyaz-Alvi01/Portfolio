import { Row, Col, Progress } from 'antd';
import { skills } from '../../../Data/skills';
import './skills.scss';

export default function Skills() {
  return (
    <section className="skills section-wrapper">
      <h2 className="section-title">My <span>Skills</span></h2>
      <p className="section-sub">Technologies I work with confidently</p>

      <Row gutter={[24, 24]}>
        {skills.map((group, i) => (
          <Col xs={24} md={12} lg={8} key={i}>
            <div className="skill-group" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="skill-group__header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-group__items">
                {group.items.map((skill, j) => (
                  <div className="skill-item" key={j}>
                    <div className="skill-item__top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <Progress
                      percent={skill.level}
                      showInfo={false}
                      strokeColor={{
                        '0%': '#6c63ff',
                        '100%': '#00d4aa',
                      }}
                      trailColor="rgba(255,255,255,0.06)"
                      strokeWidth={5}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="skills__extra">
        <h3>Other Tools & Technologies</h3>
        <div className="extra-tags">
          {['Postman','VS Code','npm','GitHub','Figma (Basic)',
            'REST APIs','JSON','Mongoose','React Router','Axios'].map(t => (
            <span className="extra-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}