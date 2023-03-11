import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Home, Policy, Info } from '../../pages';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const toggleTheme = () => {
    dispatch({
      type: 'SET_IS_DARKMODE',
      payload: !isDarkMode,
    });
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.className = 'dark';
      document.title = '3:00 AM in Tokyo';
    } else {
      body.className = 'light';
      document.title = '3:00 PM in Tokyo';
    }
  }, [isDarkMode]);

  return (
    <div className="app">
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/content-policy" element={<Policy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
