import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Gurnoor</h1>
        <h2>Full Stack Web Developer</h2>
        <p>
          I&apos;m a Full Stack Web Development student with hands-on experience in Java, Python,
          PHP, HTML, CSS, Docker, and web security. Passionate about building clean, user-friendly
          web applications and always eager to learn and grow in the tech space.
        </p>
      </div>
    </section>
  );
};

export default Home;
