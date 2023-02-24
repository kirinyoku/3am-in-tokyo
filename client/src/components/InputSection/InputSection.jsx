import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import './InputSection.scss';

export const InputSection = (props) => {

  const { 
    width,
    height,
    prompt,
    setWidth,
    setHeight,
    setPrompt, 
    sumbitHandler, 
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
          <Input type='text' name='prompt' id='prompt' onChange={(e) => setPrompt(e.currentTarget.value)} value={prompt} required autoComplete="off" />
          <p className='input-section__description'>Input prompt</p>
        </fieldset>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="width">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 w-3 h-3" role="presentation"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            <code>width</code>
          </label>
          <Select options={['128', '256', '512', '640', '704', '768', '896', '1024']} id='width' value={width} setValue={setWidth} selected={width} />
          <p className='input-section__description'>Width of output image. Maximum size is 1024x1024 because of memory limits</p>
        </fieldset>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="height">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 w-3 h-3" role="presentation"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            <code>height</code>
          </label>
          <Select options={['128', '256', '512', '640', '704', '768', '896', '1024']} id='height' value={height} setValue={setHeight} selected={height} />
          <p className='input-section__description'>Height of output image. Maximum size is 1024x1024 because of memory limits</p>
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  )
}
