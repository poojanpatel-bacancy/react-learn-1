import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

function Login() {
    const { setUser, user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Login | My App';

        if (user) {
            navigate('/test2');
        }

        usernameRef.current?.focus();
    }, []);

    const usernameRef = useRef<HTMLInputElement>(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const validateUsername = (value: string) => {
        if (!value) return 'Username is required';
        if (value.length < 5 || value.length > 15) return 'Username must be between 5 and 15 characters';
        if (value.includes(' ')) return 'Spaces are not allowed';
        if (!/^[a-zA-Z]/.test(value)) return 'Username must start with a letter';
        if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Only letters, numbers and underscore allowed';
        return '';
    };

    const validatePassword = (value: string) => {
        if (!value) return 'Password is required';
        if (value.length < 5 || value.length > 15) return 'Password must be between 5 and 15 characters';
        return '';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate both fields
        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password);

        // Update errors state
        setErrors({
            username: usernameError,
            password: passwordError
        });

        // If no errors, proceed with login
        if (!usernameError && !passwordError) {
            // Normally yeh data backend se aata hai
            const fakeUser = {
                id: 1,
                name: 'Poojan Patel',
                email: 'poojan@example.com'
            };
            setUser(fakeUser); // Login hone par user info set kar diya

            navigate('/test2');
        }
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUsername(value);
        setErrors(prev => ({
            ...prev,
            username: validateUsername(value)
        }));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        setErrors(prev => ({
            ...prev,
            password: validatePassword(value)
        }));
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
                            ref={usernameRef}
                            value={username}
                            onChange={handleUsernameChange}
                            className={`${styles.inputField} ${errors.username ? styles.inputError : ''}`}
                        />
                        {errors.username && (
                            <div className={styles.errorMessage}>{errors.username}</div>
                        )}
                    </div>

                    <div className={styles.inputGroupLast}>
                        <label className={styles.inputLabel}>
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={`${styles.inputField} ${errors.password ? styles.inputError : ''}`}
                        />
                        {errors.password && (
                            <div className={styles.errorMessage}>{errors.password}</div>
                        )}
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