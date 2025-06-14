import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li>
                    <NavLink 
                        to="/home"
                        className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact"
                        className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/test1"
                        className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
                    >
                        Test1
                    </NavLink>
                </li>
                <li className={styles.logoutBtn}>
                    <button onClick={handleLogout} className={styles.logoutBtnStyle}>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar; 