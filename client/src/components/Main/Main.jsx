import React from 'react'
import { InputSection } from '../InputSection/InputSection'
import { OutputSection } from '../OutputSection/OutputSection'
import './Main.scss';

export const Main = ({ sumbitHandler, setPrompt, setNegativePrompt, prompt, negativePrompt, predict}) => {
  
  return (
    <main className='main'>
      <InputSection 
        sumbitHandler={sumbitHandler} 
        setPrompt={setPrompt} 
        setNegativePrompt={setNegativePrompt} 
        prompt={prompt} 
        negativePrompt={negativePrompt}
      />
      <OutputSection predict={predict}/>
    </main>
  )
}
