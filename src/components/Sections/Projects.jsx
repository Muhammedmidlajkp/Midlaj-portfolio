import { projects } from '../../data/projectsData';
import ProjectImage from '../UI/ProjectImage';
import './Projects.css';

// Projects without a screenshot get a typographic panel instead of an
// empty box: initials over the tech tags, in the site's own visual language.
const Placeholder = ({ project }) => {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);
  return (
    <div className="project-visual project-visual-placeholder" aria-hidden="true">
      <span className="pv-initials">{initials}</span>
      <span className="pv-stack">{project.tags.slice(0, 3).join(' · ')}</span>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <p className="section-label reveal">// Projects</p>
      <h2 className="section-title reveal reveal-delay-1">Selected<br />work.</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isFeatured = index === 0;

          const visual = project.image ? (
            <div className="project-visual">
              <ProjectImage
                image={project.image}
                alt={`Screenshot of the ${project.title} website`}
                className="project-image"
                sizes={isFeatured ? '(max-width: 900px) 90vw, 540px' : '(max-width: 900px) 90vw, 560px'}
              />
            </div>
          ) : (
            <Placeholder project={project} />
          );

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
            >
              {/* non-featured cards show the visual on top, text below;
                  the featured card keeps its side-by-side layout */}
              {!isFeatured && visual}
              <div>
                <p className="project-num">{project.num}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <span aria-hidden="true">→</span>
                  <span className="visually-hidden"> {project.title} (opens in a new tab)</span>
                </a>
              </div>
              {isFeatured && visual}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
