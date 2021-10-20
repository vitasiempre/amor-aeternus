import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const synthSettings = {
  volume: 0.8,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0,
    attackCurve: 'exponential',
    decay: 0,
    decayCurve: 'exponential',
    sustain: 1,
    release: 0,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'fatsawtooth',
    modulationType: 'sine',
    phase: 0,
    harmonicity: 0.5
  }
}

const distortionSettings = {
  wet: 0,
  distortion: 0,
  oversample: '4x'
}

const reverbSettings = {
  wet: 0,
  decay: 1.5,
  preDelay: 0.01
}

const channelSettings = {
  volume: -6,
  pan: 0,
  mute: false,
  solo: false
}



const synthNode = new Tone.Synth(synthSettings)
const distortionNode = new Tone.Distortion(distortionSettings)
const reverbNode = new Tone.Reverb(reverbSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()

synthNode.chain(
  distortionNode,
  reverbNode,
  channelNode
)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Pad',
    type: 'ToneSynth',
    node: synthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Reverb',
    type: 'ReverbEffect',
    node: reverbNode,
    settings: reverbSettings
  },
  {
    id: generateUniqId(),
    name: 'Channel',
    type: 'Channel',
    node: channelNode,
    settings: channelSettings
  }
]

function sequention1() {
  const s = new Tone.Sequence(
  (time, note) => {
    synthNode.triggerAttackRelease(note, '16n', time)
  },
  [
    [
      [
        [
          [
            'C3', null, 'D3', null,
            'C3', 'E4', null, 'A3',
            'C3', null, 'D4', null,
            'C3', 'A4', null, null
          ]
        ]
      ]
    ]
  ],
  '1m'
)

  return s
}

export { instrument }
