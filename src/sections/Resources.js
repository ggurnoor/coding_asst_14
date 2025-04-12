// src/sections/Resources.js
import React from 'react';
import './Resources.css';

const resources = [
  {
    title: 'React Portfolio YouTube Tutorial',
    summary: 'Step-by-step guide to build a React portfolio with routing and animations.',
    image: '/assets/youtube-react.png',
    link: 'https://youtu.be/jcohAIaSy2M',
  },
  {
    title: 'FreeCodeCamp React Portfolio Guide',
    summary: 'Comprehensive article on building a portfolio website using React.',
    image: '/assets/freecodecamp.png',
    link: 'https://www.freecodecamp.org/news/build-portfolio-website-react/',
  },
  {
    title: 'MDN Web Docs',
    summary: 'Authoritative documentation for HTML, CSS, and JavaScript.',
    image: '/assets/mdn.png',
    link: 'https://developer.mozilla.org/',
  },
  {
    title: 'Docker Getting Started',
    summary: 'Official Docker guide for learning containerization and deployment.',
    image: '/assets/docker.png',
    link: 'https://docs.docker.com/get-started/',
  },
];

const Resources = () => {
  return (
    <section className="resources-section">
      <h2>Helpful Resources</h2>
      <div className="resource-list">
        {resources.map((res, index) => (
          <div className="resource-card" key={index}>
            <img src={res.image} alt={res.title} />
            <h3>{res.title}</h3>
            <p>{res.summary}</p>
            <a href={res.link} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
