import React from 'react';
import ThemeToggle from '../UI/ThemeToggle/ThemeToggle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = ({ toggleTheme }) => {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">
          <span>3</span>:00 {isDarkMode ? 'AM' : 'PM'} <span>東</span>京
        </h1>
      </Link>
      <div className="header__menu">
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/content-policy">Policy</Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
