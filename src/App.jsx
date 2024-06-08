import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx";
//import NoPage from "./pages/NoPage";
import './App.css'


export default function App() {

  return (

    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}



