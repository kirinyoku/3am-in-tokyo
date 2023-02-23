import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Range } from '../Range/Range';
import './InputSection.scss';

export const InputSection = (props) => {

  const { 
    sumbitHandler, 
    setPrompt, 
    setNegativePrompt, 
    prompt, 
    negativePrompt,
    scheduler,
    setScheduler,
    inferenceSteps,
    setInferenceSteps,
    guidanceScale,
    setGuidanceScale
  } = props;

  return (
    <section className='input-section' aria-label='input'>
      <h2 className='input-section__title'>Input <span>インプット</span></h2>
      <form className='input-section__form' onSubmit={(e) => sumbitHandler(e)} id='input-form'>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="prompt">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            <code>prompt</code>
          </label>
          <Input type='text' name='prompt' id='prompt' onChange={(e) => setPrompt(e.currentTarget.value)} value={prompt} required autocomplete="off" />
          <p className='input-section__description'>Input prompt</p>
        </fieldset>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="negative-prompt">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            <code>negative_prompt</code>
          </label>
          <Input type="text" name='negative-prompt' id='negative-prompt' onChange={(e) => setNegativePrompt(e.currentTarget.value)} value={negativePrompt}/>
          <p className='input-section__description'>The prompt or prompts not to guide the image generation (what you do not want to see in the generation). Ignored when not using guidance.</p>
        </fieldset>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            <code>scheduler</code>
          </label>
          <Select options={['DDIM', 'K_EULER', 'DPMSolverMultistep', 'K_EULER_ANCESTRAL', 'PNDM', 'KLMS']} scheduler={scheduler} setScheduler={setScheduler}/>
          <p className='input-section__description'>Choose a scheduler.</p>
        </fieldset>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            <code>num_inference_steps</code>
          </label>
          <Range min={1} max={50} step={1} value={inferenceSteps} setValue={setInferenceSteps}/>
          <p className='input-section__description'>Number of denoising steps (minimum: 1; maximum: 50)</p>
        </fieldset>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
            <code>guidance_scale</code>
          </label>
          <Range min={1} max={20} step={1} value={guidanceScale} setValue={setGuidanceScale}/>
          <p className='input-section__description'>Scale for classifier-free guidance (minimum: 1; maximum: 20)</p>
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  )
}
