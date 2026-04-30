import React from 'react';
import { projects } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section-label reveal">// Projects</p>
      <h2 className="section-title reveal reveal-delay-1">Selected<br />work.</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
          >
            <div>
              <p className="project-num">{project.num}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
            {project.featured && (
              <div className="project-visual">
                {typeof project.visual === 'string' && (project.visual.includes('.png') || project.visual.includes('.jpg') || project.visual.includes('.jpeg')) ? (
                  <img src={project.visual} alt={project.title} className="project-image" />
                ) : (
                  project.visual
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
