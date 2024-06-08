import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from "./pages/Aboutme.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Aboutme />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
);
