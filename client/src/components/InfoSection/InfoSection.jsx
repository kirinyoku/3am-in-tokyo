import React from 'react';
import { LicenseSection } from '../LicenseSection/LicenseSection';
import './InfoSection.scss';

export const InfoSection = () => {
  return (
    <section className='info-section'>
      <div className='info-section__row'> 
        <h2 className='info-section__title'>Run time and cost</h2>
        <p className='info-section__text'>Predictions run on Nvidia T4 GPU hardware. Predictions typically complete within 13 seconds.</p>
      </div>
      <div className='info-section__row'>
        <h2 className='info-section__title'>Readme</h2>
        <p className='info-section__text'>weights from: <a href="https://huggingface.co/andite/anything-v4.0" rel="noreferrer" target='_blank'>andite/anything-v4.0</a> </p>
        <article className='info-section__article'>
          <h1><b>Anything V4</b></h1>
          <p>Welcome to Anything V4 - a latent diffusion model for weebs. The newest version of Anything. This model is intended to produce high-quality, highly detailed anime style with just a few prompts. Like other anime-style Stable Diffusion models, it also supports danbooru tags to generate images.</p>
          <p>e.g. <b>1girl, white hair, golden eyes, beautiful eyes, detail, flower meadow, cumulonimbus clouds, lighting, detailed sky, garden</b></p>
          <p>
            <h2>Anime Girl:</h2>
            <img src="https://huggingface.co/andite/anything-v4.0/resolve/main/example-1.png" alt='example3'/>
          </p>
          <pre>
            <code>masterpiece, best quality, 1girl, white hair, medium hair, cat ears, closed eyes, looking at viewer, :3, cute, scarf, jacket, outdoors, streets 
            Steps: 20, Sampler: DPM++ 2M Karras, CFG scale: 7</code>
          </pre>
        </article>
      </div>
      <LicenseSection />
    </section>
  )
}
