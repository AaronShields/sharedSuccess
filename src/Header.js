import React from 'react'; 
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
    <header>
        <h1> 
            <Link to="/" className="home-link">Shared Success Foundation </Link>
        </h1>
        <nav>
            <ul className="nav-links">
                <li><Link to="/mission">Mission</Link></li>
                <li><Link to="/impact">Impact</Link></li>
                <li><Link to="/application">Application</Link></li>
            </ul>
        </nav>
    </header>
    ); 
}

export default Header; 