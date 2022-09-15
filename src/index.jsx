import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Registration from './components/registration'

const App = () => {
  return (
    <div className="main">
      <Registration />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
