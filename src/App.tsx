import { Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';
import HomePage from './components/pages/Home/HomePage';
import LoginPage from './components/pages/Login/LoginPage';

import styles from './App.module.css';
import { userUserState } from './hooks';

function App() {
  const { user, setUser, logout } = userUserState();

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
