import React from 'react';

import '../stylesheets/header.css';

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adityakarn06/", icon: "/icons/linkedin.png" },
  { name: "Twitter", href: "https://x.com/adityakarn06", icon: "/icons/twitter.png" },
  { name: "GitHub", href: "https://github.com/adityakarn06", icon: "/icons/github.png" },
  { name: "CV", href: "https://1drv.ms/w/c/a0d95babf196b8d3/ERmIFiXwM5lJsvMqDWXRS8sBPHzB9btGsFIrkdz1JpCVkQ?e=ucKXxo", icon: "/icons/cv.png" },
];

const Header = () => {
  return (
    <header className="header">
      
      <h1 className="title">Hi, I'm Aditya Raj👋</h1>
      <div className="right-section">
        <ul className="social-list"> 
           {socialLinks.map((link, index) => (
            <li key={index} className="social-item">
              <a href={link.href} target="_blank" className="social-link" aria-label={link.name}>
                <span className="tooltip">{link.name}</span>
                <img src={link.icon} alt={link.name} className="icon" />
              </a>
            </li>
          ))}
        </ul>
        {/* <p className="email">
          <a href="mailto:adityakarn06@gmail.com" className="email-link">
            adityakarn06@gmail.com
          </a>
        </p> */}
      </div>
    
    </header>
  );
};

export default Header;
