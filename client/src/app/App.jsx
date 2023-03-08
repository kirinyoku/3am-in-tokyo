import getPredict from '../api/getPredict';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import InfoSection from '../components/InfoSection/InfoSection';
import LicenseSection from '../components/LicenseSection/LicenseSection';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.size);
  const prompt = useSelector((state) => state.prompt);
  const isDarkMode = useSelector((state) => state.isDarkMode);

  // React Query
  // const mutation = useMutation(getPredict);

  const setPredict = (predict = '') => {
    dispatch({
      type: 'SET_PREDICT',
      payload: predict,
    });
  };

  const setLoading = (state) => {
    dispatch({
      type: 'SET_IS_LOADING',
      payload: state,
    });
  };

  const setError = (state) => {
    dispatch({
      type: 'SET_ERROR',
      payload: state,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPredict('');
    setError(false);
    setLoading(true);
    // mutation.mutate({ prompt, size });

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
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    dispatch({
      type: 'SET_IS_DARKMODE',
      payload: !isDarkMode,
    });
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
  }, [isDarkMode]);

  return (
    <Router>
      <div className="app">
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Main handleSubmit={handleSubmit} />} />
          <Route path="/info" element={<InfoSection />} />
          <Route path="/content-policy" element={<LicenseSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
