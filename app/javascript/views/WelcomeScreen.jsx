import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import StarterOrnament from '../../assets/images/starter-ornament.svg';
import AmorEterna from '../../assets/images/amor-aeterna.svg';
import Gem1 from '../../assets/images/1.gif';
import Gem2 from '../../assets/images/3.gif';
import Gem3 from '../../assets/images/4.gif';
import Button from '../control_components/Button'

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleStartWebAudio } = this.props

    return (
      <div className="WelcomeScreen">
        <img className="StarterOrnament" src={StarterOrnament} alt="Starter Ornament"/>
        <Button text="start" handleClick={handleStartWebAudio} />
        <img className="AmorEterna" src={AmorEterna} alt="Amor Eterna"/>
        <img className="Gem1" src={Gem1} alt="Gem"/>
        <img className="Gem2" src={Gem2} alt="Gem"/>
        <img className="Gem3" src={Gem3} alt="Gem"/>
        <img className="Gem4" src={Gem1} alt="Gem"/>
        <img className="Gem5" src={Gem2} alt="Gem"/>
        <img className="Gem6" src={Gem3} alt="Gem"/>
      </div>
    )
  }
}

WelcomeScreen.propTypes = {
  handleStartWebAudio: PropTypes.func.isRequired
}
