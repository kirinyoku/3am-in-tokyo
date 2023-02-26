import React from 'react'
import { InputSection } from '../InputSection/InputSection'
import { OutputSection } from '../OutputSection/OutputSection'
import './Main.scss';

const Main = (props) => {
  
  const {
    size,
    error,
    prompt, 
    setSize, 
    predict,
    isLoading, 
    setPrompt, 
    handleSubmit, 
  } = props

  return (
    <main className='main'>
      <InputSection 
        size={size}
        prompt={prompt} 
        setSize={setSize}
        setPrompt={setPrompt} 
        handleSubmit={handleSubmit} 
      />
      <OutputSection 
        error={error} 
        predict={predict} 
        isLoading={isLoading} 
      />
    </main>
  )
}

export default Main;
