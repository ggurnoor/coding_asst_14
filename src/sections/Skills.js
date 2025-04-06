// src/sections/Skills.js
import React from 'react';
import './Skills.css';

const skills = {
  languages: ['Java', 'Python', 'PHP', 'JavaScript', 'HTML5', 'CSS3'],
  frameworks: ['React', 'Ruby on Rails', 'Flask', 'Dash', 'Bootstrap'],
  tools: ['Docker', 'Git', 'GitHub', 'Postman', 'VSCode'],
  concepts: ['Web Security', 'REST APIs', 'CI/CD', 'MVC Architecture'],
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Languages</h3>
        <div className="skill-list">
          {skills.languages.map((lang, i) => (
            <span key={i} className="skill-badge">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Frameworks & Libraries</h3>
        <div className="skill-list">
          {skills.frameworks.map((fw, i) => (
            <span key={i} className="skill-badge">
              {fw}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools</h3>
        <div className="skill-list">
          {skills.tools.map((tool, i) => (
            <span key={i} className="skill-badge">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Concepts</h3>
        <div className="skill-list">
          {skills.concepts.map((concept, i) => (
            <span key={i} className="skill-badge">
              {concept}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
