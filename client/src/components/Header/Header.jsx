import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Header.scss';

const Header = ({ toggleTheme }) => {

  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <header className='header'>
      <h1 className='header__title'>
        <span>3</span>:00 {isDarkMode ? 'AM' : 'PM'} <span>東</span>京
      </h1>
      <ThemeToggle toggleTheme={toggleTheme} />
    </header>
  )
}

export default Header;
