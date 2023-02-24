import React from 'react'
import { InputSection } from '../InputSection/InputSection'
import { OutputSection } from '../OutputSection/OutputSection'
import './Main.scss';

export const Main = (props) => {
  
  const {
    width,
    height,
    setWidth,
    setHeight, 
    prompt, 
    predict, 
    setPrompt, 
    sumbitHandler, 
  } = props

  return (
    <main className='main'>
      <InputSection 
        width={width}
        height={height}
        prompt={prompt} 
        setWidth={setWidth}
        setHeight={setHeight}
        setPrompt={setPrompt} 
        sumbitHandler={sumbitHandler} 
      />
      <OutputSection predict={predict}/>
    </main>
  )
}
