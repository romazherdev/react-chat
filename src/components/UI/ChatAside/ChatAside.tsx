import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@tanstack/react-query';

import { patchMemberRequest } from '../../../api';
import { UserContext } from '../../../contexts/UserContext';
import { useMembers } from '../../../hooks';

import styles from './ChatAside.module.css';
import MemberList from '../MemberList/MemberList';

const ChatAside = (): JSX.Element => {
    const { data: members } = useMembers();
    const { mutate: updateMember } = useMutation(['updateMember'], patchMemberRequest);
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        updateMember({ id: user.id, active: false });
        logout();
        navigate('/login');
    };

    return (
        <aside className={styles.aside}>
            <header className={styles.asideHeader}>
                <Button type="button" variant="danger" onClick={handleLogout}>Logout</Button>
            </header>

            {members ? <MemberList members={members} /> : null}
        </aside>
    );
}

export default ChatAside;
