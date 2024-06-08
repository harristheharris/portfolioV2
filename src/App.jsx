import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";
import './App.css'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Aboutme />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

