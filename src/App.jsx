import { useState } from "react"
import "./App.css"
import { PianoFragment } from "./Components/PianoFragment"
import { ModePagination } from "./Components/ModePagination"
import { MusicSandbox } from "./Components/MusicSandbox"
import { GuitarFragment } from "./Components/GuitarFragment"
import { createContext } from "react"
import { ScalesWrapper } from "./Components/Scales/ScalesWrapper"
import styled from "styled-components"
import { ChordsWrapper } from "./Components/Chords/ChordsWrapper"

export const ScaleRootNoteContext = createContext(null)
export const ScaleDistributionContext = createContext(null)
export const ScaleModeContext = createContext(null)
export const ChordDistributionContext = createContext(null)
export const ChordRootNoteContext = createContext(null)
// export const ChordExtraNotesContext = createContext(null)

export const GuitarTuningContext = createContext(null)
export const GuitarRootNoteContext = createContext(null)
export const PageIndexContext = createContext(null)

function App() {
  const [scaleRootNote, setScaleRootNote] = useState(0)
  
  const [scaleDistribution, setScaleDistribution] = useState(0)
  const [scaleMode, setScaleMode] = useState(0)

  const [chordRootNote, setChordRootNote] = useState(0)
  const [chordDistribution, setChordDistribution] = useState(0)
  // const [chordExtraNotes, setChordExtraNotes] = useState([])

  const [guitarTuning, setGuitarTuning] = useState(0)
  const [guitarRootNote, setGuitarRootNote] = useState(8)


  const [pageIndex, setPageIndex] = useState(0)



  return <>
    <PageIndexContext.Provider value={pageIndex}>
      {/* <ModePagination
        pageNames={["Scales", "Chords"]}
        subtitle="MUSIC SANDBOX"
        setPageIndex={setPageIndex}
      /> */}
  
      <StyledScalesChordsWrapper>
        <ScaleRootNoteContext.Provider value={scaleRootNote}>
          <ScaleDistributionContext.Provider value={scaleDistribution}>
            <ScaleModeContext.Provider value={scaleMode}>
              <ChordDistributionContext.Provider value={chordDistribution}>
                <ChordRootNoteContext.Provider value={chordRootNote}>

            <ScalesWrapper
              setScaleRootNote={setScaleRootNote}
              setScaleDistribution={setScaleDistribution}
              setScaleMode={setScaleMode}
            />
            <PianoFragment
              setScaleRootNote={setScaleRootNote}
              setScaleDistribution={setScaleDistribution}
              setScaleMode={setScaleMode}
              setChordRootNote={setChordRootNote}
            />
            <ChordsWrapper />

                </ChordRootNoteContext.Provider>
              </ChordDistributionContext.Provider>
            </ScaleModeContext.Provider>
          </ScaleDistributionContext.Provider>
        </ScaleRootNoteContext.Provider>

      </StyledScalesChordsWrapper>

      {/* PianoFragment can be moved inside MusicSandbox file */}

      <ScaleRootNoteContext.Provider value={scaleRootNote}>
        <ScaleDistributionContext.Provider value={scaleDistribution}>
          <ScaleModeContext.Provider value={scaleMode}>
            <ChordDistributionContext.Provider value={chordDistribution}>
              <ChordRootNoteContext.Provider value={chordRootNote}>


              {/* <MusicSandbox
                setRootNote={setScaleRootNote}
                setScaleDistribution={setScaleDistribution}
                setScaleMode={setScaleMode}
                setChord={setChordDistribution}
              >
                <PianoFragment
                  setScaleRootNote={setScaleRootNote}
                  setScaleDistribution={setScaleDistribution}
                  setScaleMode={setScaleMode}
                  setChordRootNote={setChordRootNote}
                />
              </MusicSandbox> */}

              {/* Guitar */}
              <GuitarTuningContext.Provider value={guitarTuning}>
                <GuitarRootNoteContext.Provider value={guitarRootNote}>

                  {/* <GuitarFragment
                    setGuitarRootNote={setGuitarRootNote}
                    setGuitarTuning={setGuitarTuning}

                    activeNotes={[3]}
                  /> */}

                </GuitarRootNoteContext.Provider>
              </GuitarTuningContext.Provider>


              </ChordRootNoteContext.Provider>
            </ChordDistributionContext.Provider>
          </ScaleModeContext.Provider>

        </ScaleDistributionContext.Provider>
      </ScaleRootNoteContext.Provider>

    </PageIndexContext.Provider>

  </>
}

const StyledScalesChordsWrapper = styled.div`
  display: flex;
`

export default App
