import { useCallback, useEffect, useState } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { User } from './models';
import { UserContext } from './contexts/UserContext';
import HomePage from './components/pages/Home/HomePage';
import LoginPage from './components/pages/Login/LoginPage';

import styles from './App.module.css';

function App() {
  const [user, setUser] = useState<User>(() => {
    const userFromLocalStorage = localStorage.getItem('user') || '';

    return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // null as any is a temporary workaround
  const logout = useCallback(() => setUser(null as any), [setUser]);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      <div className={styles.app}>
        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" replace />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
