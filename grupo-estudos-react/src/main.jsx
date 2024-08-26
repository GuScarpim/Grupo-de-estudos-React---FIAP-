import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from './routes/routes';
import { TemaProvider } from './pages/useContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemaProvider>
      <Routes />
    </TemaProvider>
  </StrictMode>,
);
