import { Routes, Route } from "react-router-dom";
import LoginPage from './components/pages/LoginPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App
