import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import './App.scss';

function App() {

  const [predict, setPredict] = useState('https://replicate.delivery/pbxt/s7CafGeN2Nle1p4Ij2cjnodU1qFVjzPYhqeYq7hD80G63vRBB/out-0.png');
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getPredict = () => {
    setPredict('loading');
    fetch('http://localhost:5000/response')
      .then(res => res.json())
      .then(data => {
        setPredict(data.data);
      });
  }

  const sumbitHandler = (e) => {
    e.preventDefault();
    const data = {prompt, negativePrompt};
    fetch('http://localhost:5000/api', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
        getPredict();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    isDarkMode ? body.classList = 'dark' : body.classList = 'light'
  }, [isDarkMode])

  return (
    <div className='app'>
        <Header toggleTheme={toggleTheme} />
        <Main 
          sumbitHandler={sumbitHandler} 
          setPrompt={setPrompt} 
          setNegativePrompt={setNegativePrompt} 
          prompt={prompt} 
          negativePrompt={negativePrompt}
          predict={predict}
        />
    </div>
  );
}

export default App;
