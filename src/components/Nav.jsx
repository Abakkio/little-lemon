import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-button" aria-label="Abrir menu">☰</label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
};

export default Nav;