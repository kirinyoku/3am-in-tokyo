import React from 'react'
import { InputSection } from '../InputSection/InputSection'
import { OutputSection } from '../OutputSection/OutputSection'
import './Main.scss';

export const Main = (props) => {
  
  const {
    size,
    prompt, 
    setSize, 
    predict, 
    setPrompt, 
    sumbitHandler, 
  } = props

  return (
    <main className='main'>
      <InputSection 
        size={size}
        prompt={prompt} 
        setSize={setSize}
        setPrompt={setPrompt} 
        sumbitHandler={sumbitHandler} 
      />
      <OutputSection predict={predict}/>
    </main>
  )
}
