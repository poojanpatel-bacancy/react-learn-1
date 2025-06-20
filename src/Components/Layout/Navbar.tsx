import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

function Navbar() {
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        setUser(null);
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
                {/* Conditional Rendering - About link only for admin users */}
                {user && user.role === 'admin' && (
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
                        >
                            About
                        </NavLink>
                    </li>
                )}
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
                <li>
                    <NavLink
                        to="/test2"
                        className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
                    >
                        Test2
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/test3"
                        className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
                    >
                        Test3
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