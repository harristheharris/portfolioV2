import { Link } from "react-router-dom";



const Nav = () => {
    <nav>
        <ul>
            <li>
                <Link to="/">About Me</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>

    </nav>
}

export default Nav;