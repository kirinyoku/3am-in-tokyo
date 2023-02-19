import { useState } from 'react';
import './App.scss';

function App() {

  const [predict, setPredict] = useState('https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-silhouette-on-gray-background-png-image_4826230.png');
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry');

  const getPredict = () => {
    setPredict('loading');
    fetch('http://localhost:5000/predict')
      .then(res => res.json())
      .then(data => {
        setPredict(data.data);
      });
  }

  const sumbitHandler = (e) => {
    e.preventDefault();
    const data = {prompt, negativePrompt};
    fetch('http://localhost:5000/form', {
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
        <section className='input' aria-label='input'>
          <h2>Input</h2>
          <form className='input__form' onSubmit={(e) => sumbitHandler(e)} id='input-form'>
            <div className='input__row'>
              <label htmlFor="prompt">promt</label>
              <input type="text" name='prompt' id='prompt' onChange={(e) => setPrompt(e.currentTarget.value)} value={prompt} required/>
              <p className='input__description'>Input prompt</p>
            </div>
            <div className='input__row'>
              <label htmlFor="negative-prompt">negative_promt</label>
              <input type="text" name='negative-prompt' id='negative-prompt' onChange={(e) => setNegativePrompt(e.currentTarget.value)} value={negativePrompt} />
              <p className='input__description'>The prompt or prompts not to guide the image generation (what you do not want to see in the generation). Ignored when not using guidance.</p>
            </div>
            <input className='input__button' type="submit" value="Generate"/>
          </form>
        </section>

        <section className='output' aria-label='output'>
          <h2>Output</h2>
          <div className='output__image'>
            { predict === 'loading'
              ? <p className='output__loading'>Loading...</p>
              : <img src={predict} alt="predict" /> 
            }
          </div>
        </section>
    </div>
  );
}

export default App;
