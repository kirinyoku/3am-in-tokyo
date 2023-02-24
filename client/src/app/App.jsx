import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { InfoSection } from '../components/InfoSection/InfoSection';
import { Main } from '../components/Main/Main';
import imagePlaceholder from '../assets/image_placeholder.png';

import './App.scss';

function App() {

  const [prompt, setPrompt] = useState('');
  const [width, setWidth] = useState('512');
  const [height, setHeight] = useState('512');
  const [predict, setPredict] = useState(imagePlaceholder);

  const [isDarkMode, setIsDarkMode] = useState(true);

  // OpenAI DALL-E
  const sumbitHandler = async (e) => {
    e.preventDefault();
    setPredict('loading');

    const response = await fetch('https://api-3am-in-tokyo-kirinyoku.vercel.app/api/v1/dalle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, height, width }),
    });

    const data = await response.json();
    setPredict(data.data);
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.className = 'dark';
      document.title = '3:00 AM in Tokyo';
    } else {
      body.className = 'light';
      document.title = '3:00 PM in Tokyo';
    }
  }, [isDarkMode])

  return (
    <div className='app'>
        <Header 
          toggleTheme={toggleTheme} 
          isDarkMode={isDarkMode} 
        />
        <Main 
          width={width}
          height={height}
          prompt={prompt} 
          predict={predict}
          setWidth={setWidth}
          setHeight={setHeight} 
          setPrompt={setPrompt}
          sumbitHandler={sumbitHandler} 
        />
        <InfoSection />
        <Footer />
    </div>
  );
}

export default App;
