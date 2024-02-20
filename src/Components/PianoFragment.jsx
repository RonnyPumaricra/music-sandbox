import { useContext } from "react"
import styled from "styled-components"
import { RootNoteContext, ScaleDistributionContext, ScaleModeContext } from "../App"
import { isWhiteNote, musicKeys } from "../MusicTheory"

export function PianoFragment({setRootNote}) {

  const rootNote = useContext(RootNoteContext)
  const scaleDistribution = useContext(ScaleDistributionContext)
  const scaleMode = useContext(ScaleModeContext)

  const distribution = musicKeys[scaleDistribution].distribution
  const moddedDistribution = distribution.map((el) => {
    let newRootNote = distribution[scaleMode]
    return (el - newRootNote + 12) % 12
  })

  let pianoKeys = []

  for (let i = 0; i < 12; i++) {
    pianoKeys[i] = {}
    pianoKeys[i].isWhite = isWhiteNote((rootNote + i) % 12)
    pianoKeys[i].isHighlighted = moddedDistribution.some((el) => el === i)
    pianoKeys[i].isRootNote = i === 0
    pianoKeys[i].chromaticNote = (rootNote + i) % 12
  }

  return <PianoWrapper>
    {
      pianoKeys.map((el, i) => {
        const PianoKey = el.isWhite ? PianoWhiteKey : PianoBlackKey

        return <PianoKey
          key={i}
          onClick={() => setRootNote(el.chromaticNote)}
          $highlighted={el.isHighlighted}
          $rootNote={el.isRootNote}
        />
      })
    }
  </PianoWrapper>
}

const PianoWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
`

const PianoWhiteKey = styled.div`
  width: 3rem;
  height: 10rem;
  border: 1px solid gray;
  background: ${p => p.$rootNote ? "magenta" : p.$highlighted ? "pink": "white"};

  z-index: 1;
`


const PianoBlackKey = styled.div`
  --width: 1.5rem;
  width: var(--width);
  height: 6rem;
  border: 1px solid gray;
  margin-left: calc(var(--width) * -0.5);
  margin-right: calc(var(--width) * -0.5);

  background: ${p => p.$rootNote ? "red" : p.$highlighted ? "tomato": "black"};

  z-index: 2;
`