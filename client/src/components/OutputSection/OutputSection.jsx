import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { saveAs } from 'file-saver';
import { Button } from '../Button/Button';
import './OutputSection.scss';

export const OutputSection = ({ predict }) => {

  const downloadImage = (predict) => {
    saveAs(predict, 'image.jpeg');
  }

  const copyLink = (predict, event) => {
    event.currentTarget.innerHTML = 'URL Copied';
    navigator.clipboard.writeText(predict);
  }

  return (
    <section className='output' aria-label='output'>
      <h2 className='output__title'>Output <span>アウトプット</span></h2>
      <div className='output__predict'>
        { predict 
          ? predict === 'loading' 
            ? <BounceLoader className='output__loading' color="var(--secondary-color)"/> 
            : predict === 'error'
              ? <p className='output__text-error'>It looks like this request may not follow our <a href="#content-policy">content policy</a></p>
              : <img src={predict} alt="predict" />
          : <p className='output__text'>Images you generated will be shown here</p>
        }
      </div>
      <footer className='output__footer'>
        <Button onClick={() => downloadImage(predict)}>Download</Button>
        <Button onClick={(e) => copyLink(predict, e)}>Share</Button>
      </footer>
    </section>
  )
}
