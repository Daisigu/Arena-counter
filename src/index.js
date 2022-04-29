import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/app/App';


const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App name="Arena counter" />);
