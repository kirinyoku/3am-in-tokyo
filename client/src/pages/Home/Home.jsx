import React from 'react';
import Form from '../../components/Form/Form';
import Result from '../../components/Result/Result';
import './Home.scss';

const Home = () => {
  return (
    <main className="home">
      <Form />
      <Result />
    </main>
  );
};

export default Home;
