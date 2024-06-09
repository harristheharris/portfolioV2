import { Link } from "react-router-dom";
import "./Header.css"


const Nav = () => {
    return (
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
    )
}

export default Nav;