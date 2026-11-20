import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/UI/ErrorBoundary.jsx'

const tree = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)

const root = document.getElementById('root')

// Production HTML is prerendered (scripts/prerender.mjs), so hydrate it.
// In development the root is empty, so render from scratch.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree)
} else {
  createRoot(root).render(tree)
}

// Smooth scroll and scroll-driven motion arrive after the page is idle, in a
// chunk of their own, so they never compete with first paint.
const loadMotion = () => import('./motion/index.js').then((m) => m.default())
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 600))
window.addEventListener('load', () => idle(loadMotion, { timeout: 2000 }), { once: true })
