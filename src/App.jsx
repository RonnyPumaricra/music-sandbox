import { useState } from "react"
import "./App.css"
import { PianoFragment } from "./Components/PianoFragment"
import { ModePagination } from "./Components/ModePagination"
import { MusicSandbox } from "./Components/MusicSandbox"
import { GuitarFragment } from "./Components/GuitarFragment"
import { createContext } from "react"

export const RootNoteContext = createContext(null)
export const ScaleDistributionContext = createContext(null)
export const ScaleModeContext = createContext(null)
export const ChordContext = createContext(null)
// export const ChordExtraNotesContext = createContext(null)

export const GuitarTuningContext = createContext(null)
export const GuitarRootNoteContext = createContext(null)
export const PageIndexContext = createContext(null)

function App() {
  const [rootNote, setRootNote] = useState(0)
  
  const [scaleDistribution, setScaleDistribution] = useState(0)
  const [scaleMode, setScaleMode] = useState(0)

  const [chord, setChord] = useState(0)
  // const [chordExtraNotes, setChordExtraNotes] = useState([])

  const [guitarTuning, setGuitarTuning] = useState(0)
  const [guitarRootNote, setGuitarRootNote] = useState(8)


  const [pageIndex, setPageIndex] = useState(0)



  return <>
    <PageIndexContext.Provider value={pageIndex}>
      <ModePagination
        pageNames={["Scales", "Chords"]}
        subtitle="MUSIC SANDBOX"
        setPageIndex={setPageIndex}
      />
  
      {/* PianoFragment can be moved inside MusicSandbox file */}

      <RootNoteContext.Provider value={rootNote}>
        <ScaleDistributionContext.Provider value={scaleDistribution}>
          <ScaleModeContext.Provider value={scaleMode}>
            <ChordContext.Provider value={chord}>


              <MusicSandbox
                setRootNote={setRootNote}
                setScaleDistribution={setScaleDistribution}
                setScaleMode={setScaleMode}
                setChord={setChord}
              >
                <PianoFragment
                  setRootNote={setRootNote}
                  setScaleDistribution={setScaleDistribution}
                  setScaleMode={setScaleMode}
                />
              </MusicSandbox>

              {/* Guitar */}
              <GuitarTuningContext.Provider value={guitarTuning}>
                <GuitarRootNoteContext.Provider value={guitarRootNote}>

                  <GuitarFragment
                    setGuitarRootNote={setGuitarRootNote}
                    setGuitarTuning={setGuitarTuning}

                    activeNotes={[3]}
                  />

                </GuitarRootNoteContext.Provider>
              </GuitarTuningContext.Provider>


            </ChordContext.Provider>
          </ScaleModeContext.Provider>

        </ScaleDistributionContext.Provider>
      </RootNoteContext.Provider>

    </PageIndexContext.Provider>

  </>
}

export default App
