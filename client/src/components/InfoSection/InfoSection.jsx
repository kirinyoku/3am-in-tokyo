import React from 'react';
import './InfoSection.scss';

export const InfoSection = () => {
  return (
    <section className='info-section'>
      <div className='info-section__row'>
        <h2 className='info-section__title'>Examples</h2>
        <ul className='info-section__list'>
          <li>
            <a href="https://replicate.delivery/pbxt/pk6T3cRJcv7DP10EfEnbPeEnVxkDZjC4BMBQX2h0LfuGpxAhA/out-0.png" rel="noreferrer" target='_blank'>
              <img src="https://replicate.delivery/pbxt/pk6T3cRJcv7DP10EfEnbPeEnVxkDZjC4BMBQX2h0LfuGpxAhA/out-0.png" alt="example1" />
            </a>
          </li>
          <li>
            <a href="https://replicate.delivery/pbxt/oAbNexZsjmXWEqtnkz1K3LjknawFtCohXuxOWLwzOYbpbMQIA/out-0.png" rel="noreferrer" target='_blank'>
            <img src="https://replicate.delivery/pbxt/oAbNexZsjmXWEqtnkz1K3LjknawFtCohXuxOWLwzOYbpbMQIA/out-0.png" alt="example2" />
            </a>
          </li>
        </ul>
      </div>
      <div className='info-section__row'> 
        <h2 className='info-section__title'>Run time and cost</h2>
        <p className='info-section__text'>Predictions run on Nvidia T4 GPU hardware. Predictions typically complete within 9 seconds.</p>
      </div>
      <div className='info-section__row'>
        <h2 className='info-section__title'>Readme</h2>
        <p className='info-section__text'>weights from: <a href="https://huggingface.co/andite/pastel-mix" rel="noreferrer" target='_blank'>andite/pastel-mix</a> </p>
        <p className='info-section__text'>Uploaded a lora version.</p>
        <article className='info-section__article'>
          <h1><b>Pastel Mix</b></h1>
          <p>Welcome to Pastel Mix - a stylized latent diffusion model. This model is intended to produce high-quality, highly detailed anime style with just a few prompts.</p>
          <p>This model is made with the thought of imitating pastel-like art and the potential of mixing LORAs into a model altogether to create a fantastic mix.Recipe for this mix could be found below. Like other anime-style Stable Diffusion models, it also supports danbooru tags to generate images. </p>
          <p>e.g. <b>masterpiece, best quality, upper body, 1girl, looking at viewer, red hair, medium hair, purple eyes, demon horns, black coat, indoors, dimly lit</b></p>
          <p><img src="https://huggingface.co/andite/Pastel-Mix/resolve/main/example-images/grid-0020.png" alt='example3'/><img src="https://huggingface.co/andite/Pastel-Mix/resolve/main/example-images/grid-0018.png" alt='example4'/></p>
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
