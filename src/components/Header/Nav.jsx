import { Link } from "react-router-dom";
import "./Header.css"


const Nav = () => {
    return (
        <nav className="header__navigation">
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