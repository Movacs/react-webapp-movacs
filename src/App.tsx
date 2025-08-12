import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AppBackground from './components/background/AppBackground'
import ButtonAppBar from './components/navbar/ButtonAppBar'
import RegisterPage from './pages/auth/RegisterPage'
import { useState } from 'react'
import LoginPage from './pages/auth/LoginPage'

function App() {
  const [animation, setAnimation] = useState(false);
  const toggleAnimation = () => setAnimation(prev => !prev);

  return (
    <Router>
      <AppBackground animation={animation} />
      <ButtonAppBar toggleAnimation={toggleAnimation} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App
