import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    
    return (
        <>
        <nav>
        <ul>
            <li>
                <Link to="/">About Me</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to ="/contact">Contact</Link>
            </li>
        </ul>

        </nav>

        <Outlet />
        
        </>
    )
}

export default Layout;