import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginForm from '../organisms/LoginForm';

import styles from './LoginTpl.module.css';

const LoginTpl = (): JSX.Element => (
    <div className={styles.loginTpl}>
        <LoginForm />
    </div>
);

export default LoginTpl;
