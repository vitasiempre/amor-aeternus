import React from 'react'
import ReactDOM from 'react-dom'
import SynthContainer from '../containers/SynthContainer'

document.addEventListener('DOMContentLoaded', () => {
  console.log('synth');
  ReactDOM.render(
    <SynthContainer />,
    document.body.appendChild(document.createElement('div'))
  )
})
