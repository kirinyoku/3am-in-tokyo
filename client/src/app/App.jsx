import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../components/Header/Header';
import { InfoSection } from '../components/InfoSection/InfoSection';
import { Main } from '../components/Main/Main';
import './App.scss';

function App() {

  const placeholders = [
    'https://i.pinimg.com/564x/71/8e/df/718edf3813e1054d6fb8e7260a44a333.jpg',
    'https://i.pinimg.com/564x/38/32/57/3832578250d935c12c3f68ef86d9270e.jpg',
    'https://i.pinimg.com/564x/b2/2f/a1/b22fa18173c245f476c2c6f41ebba49c.jpg',
    'https://i.pinimg.com/564x/32/9c/8b/329c8bfb4b9ece88dcdb35b35cd39cf3.jpg',
    'https://i.pinimg.com/564x/36/11/13/3611130881978302873dd7e0997fd01c.jpg',
    'https://i.pinimg.com/564x/b7/ff/6c/b7ff6c1a0af8280aa51a1208dcc9b094.jpg',
    'https://i.pinimg.com/564x/f9/78/d2/f978d25baf1274934980bdc6470b1ad2.jpg',
    'https://i.pinimg.com/564x/69/96/2e/69962e48a18149072eed2b6c8651711e.jpg'
  ]

  const [predict, setPredict] = useState();
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('nsfw, lowres, ((bad anatomy)), ((bad hands)), text, missing finger, extra digits, fewer digits, blurry, ((mutated hands and fingers)), (poorly drawn face), ((mutation)), ((deformed face)), (ugly), ((bad proportions)), ((extra limbs)), extra face, (double head), (extra head), ((extra feet)), monster, logo, cropped, worst quality, low quality, normal quality, jpeg, humpbacked, long body, long neck, ((jpeg artifacts))');
  const [scheduler, setScheduler] = useState('DPMSolverMultistep');
  const [inferenceSteps, setInferenceSteps] = useState(20);
  const [guidanceScale, setGuidanceScale] = useState(7);
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
    const data = {
      prompt, 
      negativePrompt, 
      scheduler, 
      inferenceSteps, 
      guidanceScale
    };
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
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    setPredict(placeholders[randomIndex]);
  }, [])

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
          scheduler={scheduler}
          setScheduler={setScheduler}
          predict={predict}
          inferenceSteps={inferenceSteps}
          setInferenceSteps={setInferenceSteps}
          guidanceScale={guidanceScale}
          setGuidanceScale={setGuidanceScale}
        />
        <InfoSection />
    </div>
  );
}

export default App;
