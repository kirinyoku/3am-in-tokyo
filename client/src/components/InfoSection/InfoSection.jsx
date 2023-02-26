import React from 'react';
import { LicenseSection } from '../LicenseSection/LicenseSection';
import example from '../../assets/example.png';
import './InfoSection.scss';

const InfoSection = () => {
  return (
    <section className='info-section'>
      <div className='info-section__row'>
        <h2 className='info-section__title'>Readme</h2>
        <p className='info-section__text'>weights from: <a href="https://openai.com/dall-e-2/" rel="noreferrer" target='_blank'>openai.com/dall-e-2</a></p>
        <article className='info-section__article'>
          <h1><b>DALL-E</b></h1>
          <p>DALL·E 2 is a new AI system that can create realistic images and art from a description in natural language. DALL·E 2 can create original, realistic images and art from a text description. It can combine concepts, attributes, and styles.</p>
          <p>DALL·E 2 has learned the relationship between images and the text used to describe them. It uses a process called “diffusion,” which starts with a pattern of random dots and gradually alters that pattern towards an image when it recognizes specific aspects of that image.</p>
          <p>e.g. <b>riding a horselounging in a tropical resort in spaceplaying basketball with cats in space</b></p>
          <p>
            <img width='' height='' src={example} alt='example'/>
          </p>
          <pre>
            <code>riding a horselounging in a tropical resort in spaceplaying basketball with cats in space</code>
          </pre>
        </article>
      </div>
      <LicenseSection />
    </section>
  )
}

export default InfoSection;
