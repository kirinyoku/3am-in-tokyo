import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './OutputSection.scss';

export const OutputSection = () => {
  const predict = useSelector((state) => state.predict);
  const isError = useSelector((state) => state.isError);
  const isLoading = useSelector((state) => state.isLoading);

  const downloadImage = (predict) => {
    saveAs(predict, 'image.jpeg');
  };

  const copyLink = (predict, event) => {
    event.currentTarget.innerHTML = 'URL Copied';
    navigator.clipboard.writeText(predict);
  };

  return (
    <section className="output" aria-label="output">
      <h2 className="output__title">
        Output <span>アウトプット</span>
      </h2>
      <div className="output__predict">
        {isLoading && <BounceLoader className="output__loading" color="var(--secondary-color)" />}
        {predict && <img src={predict} alt="predict" />}
        {isError && (
          <p className="output__text-error">
            It looks like this request may not follow our{' '}
            <Link to="/content-policy">content policy</Link>
          </p>
        )}
      </div>
      <footer className="output__footer">
        <Button onClick={() => downloadImage(predict)}>Download</Button>
        <Button onClick={(e) => copyLink(predict, e)}>Share</Button>
      </footer>
    </section>
  );
};
