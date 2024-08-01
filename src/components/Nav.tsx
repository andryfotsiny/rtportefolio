// src/components/Nav.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaBriefcase, FaProjectDiagram, FaStar, FaEnvelope } from 'react-icons/fa';
import '../styles/global.css';

interface LinkItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

const links: LinkItem[] = [
  { name: "home", path: "/", icon: <FaHome /> },
  { name: "formation", path: "/formation", icon: <FaBook /> },
  { name: "expérience", path: "/experience", icon: <FaBriefcase /> },
  { name: "projetPersonnel", path: "/projetPersonnel", icon: <FaProjectDiagram /> },
  { name: "compétences", path: "/competences", icon: <FaStar /> },
  { name: "contact", path: "/contact", icon: <FaEnvelope /> }
];

const Nav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <NavLink
          to={link.path}
          key={index}
          className={({ isActive }) =>
            isActive ? "text-accent border-b-2 border-accent capitalize font-medium transition-all flex items-center gap-2" : "capitalize font-medium hover:text-accent transition-all flex items-center gap-2"
          }
        >
          {link.icon}
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
