import React from 'react'
import { InputSection } from '../InputSection/InputSection'
import { OutputSection } from '../OutputSection/OutputSection'
import './Main.scss';

export const Main = (props) => {
  
  const { 
    sumbitHandler, 
    setPrompt, 
    setNegativePrompt, 
    prompt, 
    negativePrompt, 
    predict, 
    scheduler, 
    setScheduler,
    inferenceSteps,
    setInferenceSteps,
    guidanceScale,
    setGuidanceScale
  } = props

  return (
    <main className='main'>
      <InputSection 
        sumbitHandler={sumbitHandler} 
        setPrompt={setPrompt} 
        setNegativePrompt={setNegativePrompt} 
        prompt={prompt} 
        negativePrompt={negativePrompt}
        scheduler={scheduler}
        setScheduler={setScheduler}
        inferenceSteps={inferenceSteps}
        setInferenceSteps={setInferenceSteps}
        guidanceScale={guidanceScale}
        setGuidanceScale={setGuidanceScale}
      />
      <OutputSection predict={predict}/>
    </main>
  )
}
