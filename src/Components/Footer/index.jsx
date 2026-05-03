import { GithubOutlined, LinkedinOutlined,
         MailOutlined, PhoneOutlined, WhatsAppOutlined, HeartFilled } from '@ant-design/icons';
import './footer.scss';

const socials = [
  { icon: <GithubOutlined />,   href: 'https://github.com/Fayyaz-Alvi01' },
  { icon: <LinkedinOutlined />, href: 'https://www.linkedin.com/in/muhammad-fayyaz-ahmed-b486a33ab' },
  { icon: <WhatsAppOutlined />, href: 'https://wa.me/923173554782' },
  { icon: <PhoneOutlined />, href: 'tel:+923173554782' },
  { icon: <MailOutlined />,     href: 'mailto:fayyazalvi7@gmail.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-block">
          <div className="footer__brand">
            <span className="bracket">&lt;</span>MFA<span className="bracket">/&gt;</span>
          </div>
          <p className="footer__tagline">
            Full-stack engineering focused on reliable, scalable web products.
          </p>
        </div>

        <div className="footer__meta">
          <p className="footer__copy">
            Built with <HeartFilled className="footer__heart" /> by{' '}
            <strong>Muhammad Fayyaz Ahmed</strong>
          </p>
          <p className="footer__location">NTU Faisalabad · Pakistan</p>
        </div>

        <div className="footer__socials" aria-label="Social links">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
              className="social-icon">{s.icon}</a>
          ))}
        </div>

        <div className="footer__cv">
          <a href="/Fayyaz_CV_Final.pdf" target="_blank" rel="noreferrer" className="footer__cv-link">
            Download CV
          </a>
        </div>
      </div>

      <div className="footer__bottom">© {year} Muhammad Fayyaz Ahmed. All rights reserved.</div>
    </footer>
  );
}