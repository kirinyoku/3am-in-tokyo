import React from 'react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Header.scss';

export const Header = ({ toggleTheme }) => {
  return (
    <header className='header'>
      <h1 className='header__title'><span>3</span>:00 AM <span>東</span>京</h1>
      <ThemeToggle toggleTheme={toggleTheme} />
    </header>
  )
}
