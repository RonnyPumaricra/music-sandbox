import { useContext } from "react"
import { chromaticNotes, musicChords } from "../MusicTheory"
import { ChordContext, RootNoteContext } from "../App"
import styled from "styled-components"

export function ChordsSandbox({
  setChord,
  setChordExtraNotes,
}) {

  const rootNote = useContext(RootNoteContext)
  const chord = useContext(ChordContext)

  const currentChord = musicChords[chord]

  return <div>
    <RootNote>
      {chromaticNotes[rootNote]}
    </RootNote>
    <ScaleName>
      {currentChord.name} Chord
    </ScaleName>
    <Next
      onClick={() => setChord((chord - 1 + musicChords.length) % musicChords.length)}
    >
      Prev Chord
    </Next>
    <Next
      onClick={() => setChord((chord + 1) % musicChords.length)}
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