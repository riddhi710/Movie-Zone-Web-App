import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';         // ✅ Already correct if App.jsx is now in src
import './index.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)