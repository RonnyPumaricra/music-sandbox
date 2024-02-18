import { useState } from "react"
import "./App.css"
import { PianoFragment } from "./Components/PianoFragment"
import { ModePagination } from "./Components/ModePagination"
import { MusicSandbox } from "./Components/MusicSandbox"
import { GuitarFragment } from "./Components/GuitarFragment"

// const chromaticNotes = [
//   "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"
// ]
const musicKeys = [
  {
    // leadingKey: "Major",
    distribution: [0, 2, 4, 5, 7, 9, 11],
    modes: [
      "Major (Ionian)",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Minor (Aeolian)",
      "Locrian"
    ]
  },
  {
    // leadingKey: "Blues Minor",
    distribution: [0, 3, 5, 6, 7, 10],
    modes: [
      "Blues Minor",
      "Blues Major"
    ]
  },
]

const guitarTunings = [
  {
    name: "Standard",
    distribution: [0, 5, 10, 3, 7, 0],
  },
  {
    name: "Drop",
    distribution: [0, 7, 0, 5, 9, 2],
  }
]

function App() {
  const [rootNote, setRootNote] = useState(3)
  
  const [activeScaleDistribution, setActiveScaleDistribution] = useState(0)
  const [activeScaleMode, setActiveScaleMode] = useState(0)

  const [guitarTuning, setGuitarTuning] = useState(0)
  const [guitarRootNote, setGuitarRootNote] = useState(8)


  const [pageIndex, setPageIndex] = useState(0)

  return <>
    <ModePagination
      pages={["Scales", "Chords"]}
      subtitle="MUSIC SANDBOX"
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
    />

    {/* <div>Root: {chromaticNotes[rootNote]}</div> */}

    {/* PianoFragment can be moved inside MusicSandbox file */}

    <MusicSandbox
      pageIndex={pageIndex}
      rootNote={rootNote}
      
      setRootNote={setRootNote}
      setActiveScaleDistribution={setActiveScaleDistribution}
      setActiveScaleMode={setActiveScaleMode}
    >
      <PianoFragment
        rootNote={rootNote}
        scaleDistribution={musicKeys[activeScaleDistribution]}
        activeScaleMode={activeScaleMode}

        setRootNote={setRootNote}
        setActiveScaleDistribution={setActiveScaleDistribution}
        setActiveScaleMode={setActiveScaleMode}
      />
    </MusicSandbox>
    
    <GuitarFragment
      setGuitarRootNote={setGuitarRootNote}
      setGuitarTuning={setGuitarTuning}

      guitarTuning={guitarTunings[guitarTuning]}
      guitarRootNote={guitarRootNote}
      activeNotes={[3]}
    />
  </>
}

export default App
