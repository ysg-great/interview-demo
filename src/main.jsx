import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import RepoDetails from './RepoDetails';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/repo/:owner/:repo" element={<RepoDetails />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)
