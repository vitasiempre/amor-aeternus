import React from 'react'
import ReactDOM from 'react-dom'
import SynthContainer from '../containers/SynthContainer'

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <SynthContainer />,
    document.body.appendChild(document.createElement('div'))
  )
}, { once: true });
