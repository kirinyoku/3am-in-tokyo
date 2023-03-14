import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import './Loading.scss';

const Loading = () => {
  return (
    <main className="loading">
      <BounceLoader color="var(--secondary-color)" />
    </main>
  );
};

export default Loading;
