import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import './Result.scss';

const Result = () => {
  const predict = useSelector((state) => state.predict);
  const isError = useSelector((state) => state.isError);
  const isLoading = useSelector((state) => state.isLoading);

  const downloadImage = (predict) => {
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    const imageUrl = predict.replace('https://', '');
    console.log(imageUrl);
    const downloadUrl = corsAnywhereUrl + 'https://' + imageUrl;
    console.log(downloadUrl);
    saveAs(downloadUrl);
  };

  const copyLink = (predict, event) => {
    event.currentTarget.innerHTML = 'URL Copied';
    setTimeout(() => {
      event.target.innerHTML = 'share';
    }, 2000);
    navigator.clipboard.writeText(predict);
  };

  return (
    <section className="result" aria-label="result">
      <h2 className="result__title">
        Output <span>アウトプット</span>
      </h2>
      <div className="result__predict">
        {isLoading && <BounceLoader className="result__loading" color="var(--secondary-color)" />}
        {predict && <img src={predict} alt="predict" />}
        {isError && (
          <p className="result__text-error">
            It looks like this request may not follow our{' '}
            <Link to="/content-policy">content policy</Link>
          </p>
        )}
      </div>
      <menu className="result__menu">
        <Button onClick={() => downloadImage(predict)}>Download</Button>
        <Button onClick={(e) => copyLink(predict, e)}>Share</Button>
      </menu>
    </section>
  );
};

export default Result;
