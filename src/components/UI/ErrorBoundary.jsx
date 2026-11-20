import { Component } from 'react';
import { site } from '../../data/site';
import './ErrorBoundary.css';

// If anything throws while rendering, show a plain page that still lets a
// visitor reach Midlaj, instead of a blank screen.
class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <main className="fallback">
        <h1>{site.name}</h1>
        <p>{site.role}</p>
        <p>This page could not load properly.</p>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <button type="button" onClick={() => window.location.reload()}>
          Reload the page
        </button>
      </main>
    );
  }
}

export default ErrorBoundary;
