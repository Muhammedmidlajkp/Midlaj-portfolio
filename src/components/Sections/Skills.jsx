import React from 'react';
import { skills } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
  const row1 = skills.slice(0, 7);
  const row2 = skills.slice(7, 14);

  const renderCard = (skill, index) => {
    const IconComponent = skill.icon;
    return (
      <div 
        key={`${skill.name}-${index}`} 
        className="skill-card" 
      >
        <div className="skill-icon-wrapper">
          <IconComponent size={64} color={skill.color} />
        </div>
        <div className="skill-name">{skill.name}</div>
      </div>
    );
  };

  return (
    <section id="skills">
      <p className="section-label reveal">// Skills & Tools</p>
      <h2 className="section-title reveal reveal-delay-1">My tech<br />arsenal.</h2>
      
      <div className="skills-marquee-container reveal reveal-delay-2">
        <div className="marquee-track left">
          {[...row1, ...row1].map(renderCard)}
        </div>

        <div className="marquee-track right">
          {[...row2, ...row2].map(renderCard)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
