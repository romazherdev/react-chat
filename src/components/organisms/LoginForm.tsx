import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './LoginForm.module.css';

const LoginForm = (): JSX.Element => (
    <Form className={styles.form}>
        <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Darth Vader" />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-auto">
            Submit
        </Button>
    </Form>
);

export default LoginForm;
