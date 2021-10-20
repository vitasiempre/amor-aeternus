import * as Tone from 'tone'
import React, { PureComponent } from 'react'
import WelcomeScreen from '../views/WelcomeScreen'
import SynthScreen from '../views/SynthScreen'

import * as allEffectsSynth from '../tunes/main'

export default class SynthContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: []
    }
  }

  startWebAudio = async () => {
    await Tone.start()
    this.initInstruments()

    this.setState({
      webAudioStarted: true
    })


  }

  initInstruments = () => {
    Tone.Transport.bpm.value = 120
    Tone.Transport.start()

    const instruments = []

    this.setState({ instruments })
  }

  handlePropertyValueChange = (id, property, value) => {
    console.log(property, value)
    const instruments = []

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = []

      instrument.forEach((instrumentModule, i) => {
        const newInstrumentModule = Object.assign({}, instrumentModule)

        if (instrumentModule.id === id) {
          if (property.length === 1) {
            const propertyName = property[0]
            newInstrumentModule.settings[propertyName] = value
          } else if (property.length === 2) {
            const scopeName = property[0]
            const propertyName = property[1]
            newInstrumentModule.settings[scopeName][propertyName] = value
          } else if (property.length === 3) {
            let searchedEvent

            newInstrumentModule.settings.sequence.forEach((event, i) => {
              if (
                event.noteName === property[0] &&
                event.time === property[1]
              ) {
                searchedEvent = event
                newInstrumentModule.settings.sequence.splice(i, 1)
              }
            })

            if (searchedEvent === undefined) {
              newInstrumentModule.settings.sequence.push({
                time: property[1],
                noteName: property[0],
                duration: '1n',
                velocity: 1
              })
            }
          }
        }

        newInstrument.push(newInstrumentModule)
      })

      instruments.push(newInstrument)
    })

    this.setState({
      instruments
    })
  }



  renderSynthScreen = () => {
    const { instruments } = this.state

    return (
      <SynthScreen
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
      />
    )
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  render() {
    console.log('container');
    const { webAudioStarted } = this.state
    return (
      <div className="SynthContainer">
        {webAudioStarted === true
          ? this.renderSynthScreen()
          : this.renderWelcomeScreen()}
      </div>
    )
  }
}
