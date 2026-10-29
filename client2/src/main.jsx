// =====================================================================
// React entry point
// CONCEPT: SPA (Single Page Application). index.html has one empty <div id="root">.
// React builds the page inside it with JavaScript and updates it without reloading.
// =====================================================================
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Vite injects this CSS into the page
 
// StrictMode = extra checks in development only. It runs effects twice on purpose,
// so you may see every GET request twice in the API terminal. Not in production.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
