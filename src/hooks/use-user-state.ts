import { useCallback, useEffect, useState } from 'react';
import { User } from '../models';

export function userUserState() {
    const [user, setUser] = useState<User>(() => {
        const userFromLocalStorage = localStorage.getItem('user') || null;

        return userFromLocalStorage && JSON.parse(userFromLocalStorage);
    });

    useEffect(() => {
        user ? localStorage.setItem('user', JSON.stringify(user)) : localStorage.removeItem('user');
    }, [user]);

    const logout = useCallback(() => setUser(null as any), [setUser]);

    return { user, setUser, logout };
}