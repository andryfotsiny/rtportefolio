// src/components/Nav.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/global.css';

interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  { name: "home", path: "/" },
  { name: "formation", path: "/formation" },
  { name: "expérience", path: "/experience" },
  { name: "projetPersonnel", path: "/projetPersonnel" },
  { name: "compétences", path: "/competences" },
  { name: "contact", path: "/contact" }
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
            isActive ? "text-accent border-b-2 border-accent capitalize font-medium transition-all" : "capitalize font-medium hover:text-accent transition-all"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
