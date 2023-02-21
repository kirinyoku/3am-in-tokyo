import React from 'react';
import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';
import './InputSection.scss';

export const InputSection = ({ sumbitHandler, setPrompt, setNegativePrompt, prompt, negativePrompt }) => {
  return (
    <section className='input' aria-label='input'>
      <h2 className='input__title'>Input</h2>
      <form className='input__form' onSubmit={(e) => sumbitHandler(e)} id='input-form'>
        <fieldset className='input__fieldset'>
          <label className='input__label' htmlFor="prompt">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 w-3 h-3" role="presentation"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            <code>prompt</code>
          </label>
          <InputField type='text' name='prompt' id='prompt' onChange={(e) => setPrompt(e.currentTarget.value)} value={prompt} required />
          <p className='input__description'>Input prompt</p>
        </fieldset>
        <fieldset className='input__fieldset'>
          <label className='input__label' htmlFor="negative-prompt">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 w-3 h-3" role="presentation"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            <code>negative_prompt</code>
          </label>
          <InputField type="text" name='negative-prompt' id='negative-prompt' onChange={(e) => setNegativePrompt(e.currentTarget.value)} value={negativePrompt}/>
          <p className='input__description'>The prompt or prompts not to guide the image generation (what you do not want to see in the generation). Ignored when not using guidance.</p>
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  )
}
