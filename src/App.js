import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Router>
        <NavBar
          isLoggedIn={isLoggedIn}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


