import React from 'react';
import { InputField } from '../InputField/InputField';
import './InputSection.scss';

export const InputSection = ({ sumbitHandler, setPrompt, setNegativePrompt, prompt,negativePrompt }) => {
  return (
    <section className='input' aria-label='input'>
      <h2 className='input__title'>Input</h2>
      <form className='input__form' onSubmit={(e) => sumbitHandler(e)} id='input-form'>
        <fieldset className='input__fieldset'>
          <label htmlFor="prompt">promt</label>
          <InputField type='text' name='prompt' id='prompt' onChange={(e) => setPrompt(e.currentTarget.value)} value={prompt} required />
          <p className='input__description'>Input prompt</p>
        </fieldset>
        <fieldset className='input__fieldset'>
          <label htmlFor="negative-prompt">negative_promt</label>
          <InputField type="text" name='negative-prompt' id='negative-prompt' onChange={(e) => setNegativePrompt(e.currentTarget.value)} value={negativePrompt}/>
          <p className='input__description'>The prompt or prompts not to guide the image generation (what you do not want to see in the generation). Ignored when not using guidance.</p>
        </fieldset>
        <button className='input__button' type="submit">Submit</button>
      </form>
    </section>
  )
}
