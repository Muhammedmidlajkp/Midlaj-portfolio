import React from 'react';
import { projects } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section-label reveal">// Projects</p>
      <h2 className="section-title reveal reveal-delay-1">Selected<br />work.</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isFeatured = index === 0;

          const visual = project.visual && (
            typeof project.visual === 'string' && (project.visual.includes('.png') || project.visual.includes('.jpg') || project.visual.includes('.jpeg')) ? (
              <div className="project-visual">
                <img
                  src={project.visual}
                  alt={`Screenshot of the ${project.title} website`}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <div className="project-visual project-visual-emoji">
                <span>{project.visual}</span>
              </div>
            )
          );

          return (
            <div
              key={project.id}
              className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
            >
              {/* non-featured cards show the screenshot on top, text below;
                  the featured card keeps its side-by-side layout */}
              {!isFeatured && visual}
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
              {isFeatured && visual}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
