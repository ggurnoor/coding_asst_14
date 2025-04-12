import React from 'react';
import './Work.css';
import Button from '../components/button/button.tsx';
import Card from '../components/Card/Card.tsx';

const projects = [
  {
    title: 'StreetStitch',
    content:
      'A Ruby on Rails e-commerce clothing store with customer/admin roles, tax calculation, and product filtering.',
    image: '/assets/streetstitch.png',
    tech: ['Ruby on Rails', 'PostgreSQL', 'Devise', 'Bootstrap'],
    link: 'https://github.com/ggurnoor',
  },
  {
    title: 'Flask Dash App',
    content:
      'A web app using Flask and Dash for API services and Winnipeg open data visualization, featuring image conversion and pyjokes API.',
    image: '/assets/flask-dash.png',
    tech: ['Python', 'Flask', 'Dash', 'Pillow'],
    link: 'https://github.com/ggurnoor',
  },
  {
    title: 'Car Dealership - Static Site',
    content:
      'A responsive car dealership website built with HTML5 and CSS3, showcasing modern design and mobile layout.',
    image: '/assets/dealership-static.png',
    tech: ['HTML', 'CSS'],
    link: 'https://github.com/ggurnoor',
  },
  {
    title: 'Car Dealership - Dynamic Site',
    content:
      'A dynamic car dealership web app with PHP backend for listing and managing cars using form submissions.',
    image: '/assets/dealership-php.png',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    link: 'https://github.com/ggurnoor',
  },
];

const Work = () => {
  return (
    <section className="work-section">
      <h2>My Work</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            content={project.content}
            image={project.image}
            footer={
              <>
                <div className="tech-list">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button label="View Project" />
                </a>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
