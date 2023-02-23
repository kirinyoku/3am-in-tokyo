import React from 'react';
import './LicenseSection.scss';

export const LicenseSection = () => {
  return (
    <section className='license-section'>
      <h2 className='license-section__title'>License</h2>
        <p className='license-section__text'>This model is open access and available to all, with a CreativeML OpenRAIL-M license further specifying rights and usage.</p>
        <p className='license-section__text'>The CreativeML OpenRAIL License specifies:</p>
        <ol className='license-section__list'>
          <li>You can't use the model to deliberately produce nor share illegal or harmful outputs or content.</li>
          <li>The authors claims no rights on the outputs you generate, you are free to use them and are accountable for their use which must not go against the provisions set in the license</li>
          <li>You may re-distribute the weights and use the model commercially and/or as a service. If you do, please be aware you have to include the same use restrictions as the ones in the license and share a copy of the CreativeML OpenRAIL-M to all your users (please read the license entirely and carefully)<br/>
          <a href="https://huggingface.co/spaces/CompVis/stable-diffusion-license" rel="nofollow">Please read the full license here</a></li>
        </ol>
    </section>
  )
}
