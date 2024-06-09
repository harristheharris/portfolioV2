import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx";
//import NoPage from "./pages/NoPage";
import './App.css'

function App() {

  return (

    <div>
      <Header />
      <Outlet /> {/*portfolio, contact me, about me*/}
      <Footer />
      
    </div>

  )
}


export default App;
