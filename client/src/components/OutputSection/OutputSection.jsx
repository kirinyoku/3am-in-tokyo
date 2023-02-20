import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import './OutputSection.scss';

export const OutputSection = ({ predict }) => {
  return (
    <section className='output' aria-label='output'>
      <h2 className='output__title'>Output</h2>
      <div className='output__predict'>
        { predict 
          ? predict === 'loading' 
            ? <BounceLoader className='output__loading' color="#000000"/> 
            : predict === 'error'
              ? <p className='output__text'>Something went wrong, please try again</p>
              : <img src={predict} alt="predict" />
          : <p className='output__text'>Images you generated will be shown here</p>
        }
      </div>
    </section>
  )
}
