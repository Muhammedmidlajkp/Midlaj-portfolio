import { projects } from '../../data/projectsData';
import ProjectImage from '../UI/ProjectImage';
import './Projects.css';

// Tags that say how the site was made, not what it is built with.
const NOT_TECH = ['Client Project', 'Responsive Design'];

const techOf = (project) => project.tags.filter((t) => !NOT_TECH.includes(t));
const isClient = (project) => project.tags.includes('Client Project');

const NewTab = ({ title }) => (
  <span className="visually-hidden"> {title} (opens in a new tab)</span>
);

const ArrowOut = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
  </svg>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects">
      <div className="projects-head">
        <h2 className="section-title">Selected work</h2>
        <p className="projects-count">{projects.length} projects</p>
      </div>

      <div className="features">
        {featured.map((project) => (
          <article
            key={project.id}
            id={`project-${project.id}`}
            className="feature"
            data-cursor={project.link ? 'View' : undefined}
          >
            {/* the image repeats the title link, so it is skipped by keyboard
                and assistive tech; its alt text still gives crawlers and image
                search a description. Without a live link it is just a picture. */}
            {project.link ? (
              <a
                className="feature-media"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
              >
                <ProjectImage
                  image={project.image}
                  alt={`${project.title} website screenshot`}
                  className="feature-image"
                  sizes="(max-width: 900px) 92vw, 760px"
                />
              </a>
            ) : (
              <div className="feature-media">
                <ProjectImage
                  image={project.image}
                  alt={`${project.title} screenshot`}
                  className="feature-image"
                  sizes="(max-width: 900px) 92vw, 760px"
                />
              </div>
            )}

            <div className="feature-body">
              {isClient(project) && <p className="feature-kind">Client work</p>}
              <h3 className="feature-title">{project.title}</h3>
              <p className="feature-desc">{project.desc}</p>
              <p className="feature-tech">{techOf(project).join(', ')}</p>
              {project.link ? (
                <a
                  className="feature-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site
                  <ArrowOut />
                  <NewTab title={project.title} />
                </a>
              ) : (
                <p className="feature-offline">Live site unavailable</p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="paper">
      <h3 className="index-title">More projects</h3>
      <ul className="index">
        {rest.map((project) => (
          <li key={project.id} id={`project-${project.id}`}>
            <a className="row" href={project.link} target="_blank" rel="noopener noreferrer" data-cursor="Open">
              <span className="row-name">
                <span className="row-title">{project.title}</span>
                {isClient(project) && <span className="row-kind">Client work</span>}
              </span>
              <span className="row-desc">{project.desc}</span>
              <span className="row-tech">{techOf(project).join(', ')}</span>
              <span className="row-go">
                <ArrowOut />
              </span>
              <NewTab title={project.title} />
            </a>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Projects;
