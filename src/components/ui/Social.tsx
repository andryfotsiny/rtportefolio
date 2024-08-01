import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use this if you need routing, otherwise use <a> for external links

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/andryfotsiny" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/jean-michel-andrianantenaina-483056304/" },
  { icon: <FaFacebook />, path: "https://web.facebook.com/andry.fotsiny.98" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
