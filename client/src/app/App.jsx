import { useEffect, useState } from 'react';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Footer  from '../components/Footer/Footer';
import imagePlaceholder from '../assets/image_placeholder.png';
import InfoSection from '../components/InfoSection/InfoSection';
import './App.scss';

function App() {

  const [prompt, setPrompt] = useState(''); // stores the user's prompt input
  const [size, setSize] = useState('512x512'); // stores the size of the image to be generated
  const [predict, setPredict] = useState(imagePlaceholder); // stores the generated image
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPredict('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api-3am-in-tokyo-kirinyoku.vercel.app/api/v1/dall-e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, size }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      setPredict(data.data);

    } catch (error) {
      setError(true);
      setPredict('');
      console.log(error);

    } finally {
      setIsLoading(false);
    } 
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
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
        <Main 
          size={size}
          error={error}
          prompt={prompt} 
          predict={predict}
          setSize={setSize}
          isLoading={isLoading}
          setPrompt={setPrompt}
          handleSubmit={handleSubmit} 
        />
        <InfoSection />
        <Footer />
    </div>
  );
}

export default App;
