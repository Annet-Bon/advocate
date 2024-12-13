import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';                   // Імпорт App
import './styles/main.scss';                     // Загальні стилі (якщо є)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);