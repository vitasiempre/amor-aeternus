import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'
import Knob from '../control_components/Knob'
import ButtonSet from '../control_components/ButtonSet'



export default class Pad extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { settings } = this.props
    const { volume } = settings

    node.volume.value = volume
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { volume } = settings

    node.volume.value = volume

    console.log(settings);
    return (
      <div className="Pad">
        <h1>PAD</h1>

        <Slider
          name="Volume"
          property={['volume']}
          min={-20}
          max={10}
          step={0.01}
          value={volume}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

// Pad.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   node: PropTypes.object.isRequired,
//   settings: PropTypes.object.isRequired,
//   handlePropertyValueChange: PropTypes.func.isRequired
// }
