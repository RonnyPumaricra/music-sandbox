import { useContext } from "react"
import { chromaticNotes, musicChords } from "../MusicTheory"
import { ChordDistributionContext, ChordRootNoteContext } from "../App"
import styled from "styled-components"

export function ChordsSandbox({
  setChord,
  setChordExtraNotes,
}) {

  const chordRootNote = useContext(ChordRootNoteContext)
  const chordDistribution = useContext(ChordDistributionContext)

  const currentChord = musicChords[chordDistribution]

  return <div>
    <RootNote>
      {chromaticNotes[chordRootNote]}
    </RootNote>
    <ScaleName>
      {currentChord.name} Chord
    </ScaleName>
    <Next
      onClick={() => setChord((chordDistribution - 1 + musicChords.length) % musicChords.length)}
    >
      Prev Chord
    </Next>
    <Next
      onClick={() => setChord((chordDistribution + 1) % musicChords.length)}
    >
      Next Chord
    </Next>
  </div>
}


const RootNote = styled.div`
  font-size: 5rem;
`

const ScaleName = styled.div`

`
const Next = styled.button`

`