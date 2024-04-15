import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnchorProvider } from "react-anchor-navigation"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnchorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </AnchorProvider>
)
