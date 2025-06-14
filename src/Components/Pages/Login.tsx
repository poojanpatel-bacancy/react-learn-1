import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {

    //localStorage.removeItem('isLoggedIn');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple validation
        if (username && password) {
            // Store login state
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        } else {
            alert('Please enter both username and password');
        }
    };

    return (
        <div>
            <div className={styles.loginBox}>
                <h2 className={styles.loginTitle}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputGroupLast}>
                        <label className={styles.inputLabel}>
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.loginBtn}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login; 