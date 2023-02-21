import style from './Header.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="white-origami-bird.png" alt="white origami" /></li>
                <Link to="/"><NavigationItem>Home</NavigationItem></Link>
                <Link to="/about"><NavigationItem>About</NavigationItem></Link>
                <Link to="/contact-us"><NavigationItem>Contact Us</NavigationItem></Link>
                <NavigationItem>Going to 4</NavigationItem>
                <NavigationItem>Going to 5</NavigationItem>
                <NavigationItem>Going to 6</NavigationItem>
                <NavigationItem>Going to 7</NavigationItem>
                <NavigationItem>Going to 8</NavigationItem>
                <NavigationItem>Going to 9</NavigationItem>
                <NavigationItem>Going to 10</NavigationItem>
                <NavigationItem>Going to 11</NavigationItem>
                <Link to="about">About</Link>
            </ul>
        </nav>

    );
}

export default Header;