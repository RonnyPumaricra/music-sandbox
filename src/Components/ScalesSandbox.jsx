import { useContext } from "react"
import styled from "styled-components"
import { RootNoteContext, ScaleDistributionContext, ScaleModeContext } from "../App"
import { chromaticNotes, musicKeys } from "../MusicTheory"

export function ScalesSandbox({
  setScaleMode,
  setScaleDistribution,
  setRootNote,

}) {
  
  const rootNote = useContext(RootNoteContext)
  const scaleDistribution = useContext(ScaleDistributionContext)
  const scaleMode = useContext(ScaleModeContext)


  const currentDistribution = musicKeys[scaleDistribution]

  function changeScaleMode(newMode) {
    // let length = currentDistribution.modes.length
    let distribution = currentDistribution.distribution
    let noteDifference = distribution[newMode] - distribution[scaleMode]

    setRootNote((rootNote + noteDifference + 12) % 12)
    setScaleMode(newMode)
  }

  function moveScaleDistribution(offset) {
    let length = musicKeys.length

    setScaleDistribution((scaleDistribution + offset + length) % length)
    setScaleMode(0)
  }
  
  return <div>
    <RootNote>
      {chromaticNotes[rootNote]}
    </RootNote>
    <ScaleName>
      {currentDistribution.modes[scaleMode]} Scale
    </ScaleName>

    <Next
      onClick={() => moveScaleDistribution(-1)}
    >
      Prev Scale
    </Next>
    <Next
      onClick={() => moveScaleDistribution(1)}
    >
      Next Scale
    </Next>

    <div>
      <h3>Modes:</h3>
      <ModeWrapper>

      {
        currentDistribution.modes.map((el, i) => {
          if (el === null || el === undefined) return null

          return (
            <ModeItem
              key={i}
              $active={i == scaleMode}
              onClick={() => changeScaleMode(i)}
            >
              {i + 1}
            </ModeItem>
          )
        })
      }
      </ModeWrapper>
    </div>


  </div>
}

const RootNote = styled.div`
  font-size: 5rem;
`

const ScaleName = styled.div`

`
const Next = styled.button`

`

const ModeWrapper = styled.div`
  display: flex;
  gap: 8px;
`

const ModeItem = styled.span`
  width: 1.5rem;
  background: ${p => p.$active ? "tomato" : "lightgray"};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`