import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Button from '../control_components/Button'

import Pad from '../module_components/Pad'


export default class SynthScreen extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props


    return <div className="SynthScreen">
      <Pad />
    </div>

  }
}

SynthScreen.propTypes = {
  // instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
