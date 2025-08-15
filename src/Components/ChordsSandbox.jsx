import { useContext } from "react"
import { chromaticNotes, musicChords } from "./music/MusicTheory"
import { ChordDistributionContext, ChordRootNoteContext, PageIndexContext } from "../App"
import styled from "styled-components"

export function ChordsSandbox({
  setChord,
  setChordExtraNotes,
}) {

  const pageIndex = useContext(PageIndexContext)

  const chordRootNote = useContext(ChordRootNoteContext)
  const chordDistribution = useContext(ChordDistributionContext)

  const currentChord = musicChords[chordDistribution]

  return <Wrapper $active={pageIndex === 1}>
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
  </Wrapper>
}

const Wrapper = styled.div`
  background: tomato;
  width: 300px;
  /* margin-right: {p => p.$active ? "0" : "-300px"}; */
  margin-right: -300px;
`



const RootNote = styled.div`
  font-size: 5rem;
`

const ScaleName = styled.div`

`
const Next = styled.button`

`