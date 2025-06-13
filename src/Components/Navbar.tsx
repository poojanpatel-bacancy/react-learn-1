import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1rem',
            backgroundColor: '#f3f4f6',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 1000
        }}>
            <ul style={{
                display: 'flex',
                gap: '1rem',
                listStyle: 'none',
                margin: 0,
                padding: 0
            }}>
                <li>
                    <NavLink 
                        to="/home"
                        style={({ isActive }) => ({
                            color: isActive ? '#3b82f6' : 'black',
                            textDecoration: isActive ? 'underline' : 'none',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? '#3b82f6' : 'black',
                            textDecoration: isActive ? 'underline' : 'none',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact"
                        style={({ isActive }) => ({
                            color: isActive ? '#3b82f6' : 'black',
                            textDecoration: isActive ? 'underline' : 'none',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/test1"
                        style={({ isActive }) => ({
                            color: isActive ? '#3b82f6' : 'black',
                            textDecoration: isActive ? 'underline' : 'none',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        Test1
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar; 