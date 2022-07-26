import React from 'react'
import logo from './logo.svg'
import { BasceExample } from './router'
import Example from './views/component1'
import Calculator from './views/file'
import Calculator2 from './views/stateUp'
import App2 from './views/content'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BasceExample></BasceExample>
        <Example></Example>
        <Calculator></Calculator>
        <Calculator2></Calculator2>
        <App2></App2>
      </header>
    </div>
  )
}

export default App
