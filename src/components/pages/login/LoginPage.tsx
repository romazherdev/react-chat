import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { UserContext } from '../../../contexts/UserContext';

import styles from './LoginPage.module.css';

export const LoginPage = (): JSX.Element => {
    const [username, setUsername] = useState('');
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        userCtx.setUser({ username });
        navigate('/');
    };

    return (
        <div className={styles.page}>
            <Form className={styles.form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        autoComplete="off"
                        placeholder="Darth Vader"
                        value={username}
                        onChange={handleInputChange}
                        minLength={4}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="m-auto">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;
