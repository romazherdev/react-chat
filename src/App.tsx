import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import { UserContext } from './contexts/UserContext';
import { useEffect, useState } from 'react';
import { User } from './models';
import ChatPage from './components/pages/chat/ChatPage';
import LoginPage from './components/pages/login/LoginPage';

function App() {
  const [user, setUser] = useState<User | null>(() => {
    const userFromLocalStorage = localStorage.getItem('user') || '';
    
    return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className={styles.app}>
        <Routes>
          <Route
            path="/"
            element={user ? <ChatPage /> : <Navigate to="/login" replace />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
