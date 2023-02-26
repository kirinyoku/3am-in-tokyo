import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import './InputSection.scss';

export const InputSection = (props) => {

  const dispatch = useDispatch();

  const { 
    prompt,
    handleSubmit, 
  } = props;

  const changeHandler = (e, type) => {
    dispatch({
      type,
      payload: e.currentTarget.value,
    })
  }

  return (
    <section className='input-section' aria-label='input'>
      <h2 className='input-section__title'>Input <span>インプット</span></h2>
      <form className='input-section__form' onSubmit={(e) => handleSubmit(e)} id='input-form'>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="prompt">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            <code>prompt</code>
          </label>
          <Input 
            required 
            type='text' 
            id='prompt' 
            name='prompt' 
            value={prompt} 
            autoComplete="off"
            onChange={(e) => changeHandler(e, 'SET_PROMPT')} 
            placeholder="a street at 3am in Tokyo with neon signs" 
          />
          <p className='input-section__description'>Input prompt</p>
        </fieldset>
        <fieldset className='input-section__fieldset'>
          <label className='input-section__label' htmlFor="size">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 w-3 h-3" role="presentation"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            <code>size</code>
          </label>
          <Select 
            id='size'
            defaultValue='512x512' 
            options={['256x256', '512x512', '1024x1024']}
            onChange={(e) => changeHandler(e, 'SET_SIZE')}
          />
          <p className='input-section__description'>Size of output image. Maximum size is 1024x1024 because of memory limits</p>
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  )
}
