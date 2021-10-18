import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import AmorEterna from '../../assets/images/amor-aeterna.svg';
import Button from '../control_components/Button'

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleStartWebAudio } = this.props

    return (
      <div className="WelcomeScreen">
        <Button text="start" handleClick={handleStartWebAudio} />
        <img className="AmorEterna" src={AmorEterna} alt="Amor Eterna"/>
      </div>
    )
  }
}

WelcomeScreen.propTypes = {
  handleStartWebAudio: PropTypes.func.isRequired
}
