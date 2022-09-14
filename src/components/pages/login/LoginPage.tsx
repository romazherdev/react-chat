import { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@tanstack/react-query';

import { UserContext } from '../../../contexts/UserContext';
import { loginOrRegisterRequest } from '../../../api';

import styles from './LoginPage.module.css';

export const LoginPage = (): JSX.Element => {
    const { mutate: loginOrRegister, data: user } = useMutation(['loginOrRegister'], loginOrRegisterRequest);
    const [username, setUsername] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setUser(user);
            navigate('/');
        }
    }, [user]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        loginOrRegister(username);
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
