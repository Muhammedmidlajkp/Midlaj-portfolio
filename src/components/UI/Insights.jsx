import { useEffect } from 'react';

// Vercel Web Analytics and Speed Insights, loaded only in production and only
// when VITE_ENABLE_INSIGHTS=1. Both must also be switched on in the Vercel
// dashboard (Project > Analytics, and Project > Speed Insights); until then
// their /_vercel/... scripts return 404, which would add console errors. So
// this stays off by default. The code is a separate chunk that only visitors
// of an enabled deployment download, and the CSP already allows it ('self').
const Insights = () => {
  useEffect(() => {
    if (!import.meta.env.PROD || import.meta.env.VITE_ENABLE_INSIGHTS !== '1') return;
    import('@vercel/analytics').then((m) => m.inject());
    import('@vercel/speed-insights').then((m) => m.injectSpeedInsights());
  }, []);

  return null;
};

export default Insights;
