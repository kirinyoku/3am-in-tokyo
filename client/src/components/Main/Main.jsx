import React from 'react'
import { InputSection } from '../InputSection/InputSection'
import { OutputSection } from '../OutputSection/OutputSection'
import './Main.scss';

const Main = ({ handleSubmit }) => {
  
  return (
    <main className='main'>
      <InputSection handleSubmit={handleSubmit} />
      <OutputSection />
    </main>
  )
}

export default Main;
