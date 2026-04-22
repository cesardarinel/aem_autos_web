import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Global CSS imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/all.min.css'
import './styles/style.css'
import './styles/main.css'

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
