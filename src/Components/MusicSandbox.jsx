import { useContext } from "react";
import { ChordsSandbox } from "./ChordsSandbox";
import { ScalesSandbox } from "./ScalesSandbox";
// import { PageIndexContext, RootNoteContext, ScaleDistributionContext, ScaleModeContext } from "../App";

export function MusicSandbox({  
  setRootNote,
  setScaleDistribution,
  setScaleMode,
  
  children
}) {

  // const pageIndex = useContext(PageIndexContext)
  // const rootNote = useContext(RootNoteContext)
  // const scaleDistribution = useContext(ScaleDistributionContext)
  // const scaleMode = useContext(ScaleModeContext)

  return <div>
    <ScalesSandbox
      setRootNote={setRootNote}
      setScaleDistribution={setScaleDistribution}
      setScaleMode={setScaleMode}
    />
    {children}
    <ChordsSandbox />
  </div>
}