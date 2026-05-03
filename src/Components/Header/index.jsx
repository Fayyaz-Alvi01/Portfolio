import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { FaReact } from 'react-icons/fa';
import './navbar.scss';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills',   path: '/skills' },
  { label: 'Contact',  path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <span className="logo-bracket">&lt;</span>
          <FaReact className="react-icon" />
          <span className="brand-text">MFA Portfolio</span>
          <span className="logo-bracket">/&gt;</span>
        </NavLink>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="/Fayyaz_CV_Final.pdf" target="_blank" rel="noreferrer">
              <Button type="primary" size="small" className="navbar__resume-btn">
                Resume
              </Button>
            </a>
          </li>
          <li>
            <a href="/contact">
              <Button size="small" className="navbar__contact-btn">
                Hire Me
              </Button>
            </a>
          </li>
        </ul>

        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
    </nav>
  );
}