import { useState } from 'react';
import { InputSection } from '../components/InputSection/InputSection';
import { OutputSection } from '../components/OutputSection/OutputSection';
import './App.scss';

function App() {

  const [predict, setPredict] = useState('');
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry');

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

  return (
    <div className="app">
        <InputSection 
          sumbitHandler={sumbitHandler} 
          setPrompt={setPrompt} 
          setNegativePrompt={setNegativePrompt}
          prompt={prompt}
          negativePrompt={negativePrompt} 
        />
        <OutputSection predict={predict} />
    </div>
  );
}

export default App;
