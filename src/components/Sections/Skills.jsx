import React from 'react';
import { skillGroups } from '../../data/skillsData';
import './Skills.css';

/* Pointer-tracked highlight — writes coords as CSS vars, GPU-cheap */
const trackPointer = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="sk-head">
        <div>
          <p className="section-label reveal">// Skills &amp; Tools</p>
          <h2 id="skills-heading" className="section-title reveal reveal-delay-1">
            My tech<br />arsenal.
          </h2>
        </div>
        <p className="sk-philosophy reveal reveal-delay-2">
          Full-stack by habit, design-minded by choice — every tool here has
          shipped something real, chosen for speed, reliability, and code that
          stays maintainable.
        </p>
      </div>

      <ul className="sk-grid">
        {skillGroups.map((group, gi) => (
          <li
            key={group.id}
            className={`skill-card sc-card reveal reveal-delay-${(gi % 3) + 1}`}
            onMouseMove={trackPointer}
          >
            <div className="sc-glow" aria-hidden="true" />

            <header className="sc-head">
              <h3 className="sc-title">{group.title}</h3>
              <span className="sc-count" aria-label={`${group.skills.length} skills`}>
                {String(group.skills.length).padStart(2, '0')}
              </span>
            </header>

            <ul className="sc-chips">
              {group.skills.map((skill, si) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={skill.name}
                    className="sc-chip"
                    style={{ '--chip-i': si }}
                  >
                    <span className="sc-chip-icon" aria-hidden="true">
                      {Icon ? (
                        <Icon size={17} color={skill.color} />
                      ) : (
                        <span className="sc-chip-letter" style={{ color: skill.color }}>
                          {skill.letter}
                        </span>
                      )}
                    </span>
                    <span className="sc-chip-text">
                      <span className="sc-chip-name">{skill.name}</span>
                      <span className="sc-chip-meta">{skill.meta}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
