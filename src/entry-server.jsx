import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import ErrorBoundary from './components/UI/ErrorBoundary.jsx';

// Used only at build time by scripts/prerender.mjs: the page is rendered to
// HTML once, so crawlers, link previews and slow connections get real content
// before any JavaScript runs. The browser then hydrates it (see main.jsx).
export function render() {
  return renderToString(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
}
