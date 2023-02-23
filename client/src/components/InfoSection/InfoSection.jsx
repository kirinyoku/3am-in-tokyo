import React from 'react';
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
      <div className='info-section__row'> 
        <h2 className='info-section__title'>License</h2>
        <p className='info-section__text'>This model is open access and available to all, with a CreativeML OpenRAIL-M license further specifying rights and usage.</p>
        <p className='info-section__text'>The CreativeML OpenRAIL License specifies:</p>
        <ol className='info-section__order-list'>
          <li>You can't use the model to deliberately produce nor share illegal or harmful outputs or content.</li>
          <li>The authors claims no rights on the outputs you generate, you are free to use them and are accountable for their use which must not go against the provisions set in the license</li>
          <li>You may re-distribute the weights and use the model commercially and/or as a service. If you do, please be aware you have to include the same use restrictions as the ones in the license and share a copy of the CreativeML OpenRAIL-M to all your users (please read the license entirely and carefully)<br/>
          <a href="https://huggingface.co/spaces/CompVis/stable-diffusion-license" rel="nofollow">Please read the full license here</a></li>
        </ol>
      </div>
    </section>
  )
}
