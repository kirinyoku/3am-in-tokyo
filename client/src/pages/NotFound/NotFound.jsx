import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <main className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__message">Page Not Found</p>
    </main>
  );
};

export default NotFound;
