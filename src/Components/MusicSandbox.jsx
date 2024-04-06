import { useContext } from "react";
import { ChordsSandbox } from "./ChordsSandbox";
import { ScalesSandbox } from "./ScalesSandbox";
import styled from "styled-components";
import { PageIndexContext } from "../App";

export function MusicSandbox({  
  setRootNote,
  setScaleDistribution,
  setScaleMode,
  setChord,
  children
}) {

  const pageIndex = useContext(PageIndexContext)
  // const rootNote = useContext(RootNoteContext)
  // const scaleDistribution = useContext(ScaleDistributionContext)
  // const scaleMode = useContext(ScaleModeContext)

  return <Wrapper $index={pageIndex}>
    <ScalesSandbox
      setRootNote={setRootNote}
      setScaleDistribution={setScaleDistribution}
      setScaleMode={setScaleMode}
    />
    {children}
    <ChordsSandbox
      setChord={setChord}
    />
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  translate: ${p => p.$index * -300 + "px"} 0;
  transition: translate 200ms;
`