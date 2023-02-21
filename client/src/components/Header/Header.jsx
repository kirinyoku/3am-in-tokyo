import React from 'react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Header.scss';

export const Header = ({ toggleTheme }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>3:00 AM</h1>
      <ThemeToggle toggleTheme={toggleTheme} />
    </header>
  )
}
