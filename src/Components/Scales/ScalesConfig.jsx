import { useContext } from "react"
import { ScaleRootNoteContext, ScaleDistributionContext, ScaleModeContext, PageIndexContext } from "../../App"
import { chromaticNotes, musicKeys } from "../music/MusicTheory"
import { MusicApi } from "../music/MusicApi"
import styled from "styled-components"

export function ScalesConfig({
  setScaleMode,
  setScaleDistribution,
  setRootNote
}) {

  const scaleRootNote = useContext(ScaleRootNoteContext)
  const scaleDistribution = useContext(ScaleDistributionContext)
  const scaleMode = useContext(ScaleModeContext)
  
  const pageIndex = useContext(PageIndexContext)



  return <ConfigWrapper>
    <div>
      <RootNoteWrapper>
        <RootNote>{chromaticNotes[scaleRootNote]}</RootNote>
        <LockBtn></LockBtn>
      </RootNoteWrapper>
      <div>

        <button onClick={() => setScaleDistribution(MusicApi.changeDistribution(scaleDistribution - 1))}>Back</button>
        <Distribution>{musicKeys[scaleDistribution].leadingKey ?? musicKeys[scaleDistribution].modes[0]}</Distribution>
        <button onClick={() => setScaleDistribution(MusicApi.changeDistribution(scaleDistribution + 1))}>Next</button>
      </div>
      <div>
        <button onClick={() => setScaleMode(MusicApi.changeMode(scaleDistribution, scaleMode - 1))}>Back</button>
        <Mode>{scaleMode + 1}#: {musicKeys[scaleDistribution].modes[ scaleMode ] ?? "SIN NOMBRE"}</Mode>
        <button onClick={() => setScaleMode(MusicApi.changeMode(scaleDistribution, scaleMode + 1))}>Next</button>
      </div>
    </div>
  </ConfigWrapper>
}


const ConfigWrapper = styled.div`
  width: 300px;
  text-align: center;
  padding: 40px 0;
`

const RootNoteWrapper = styled.div`
  /* display: flex; */
  /* align-items: baseline; */
  justify-content: center;

  margin-bottom: 12px;
`

const RootNote = styled.span`
  font-size: 128px;
  font-weight: 700;
  font-family: "Overpass";
  line-height: 1;

  color: #1F9329;
`

const LockBtn = styled.button`
  display: inline-block;
  height: 32px;
  width: 32px;
`

const Distribution = styled.h3`
  font-family: "Gothic A1";
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.02em;

  display: inline-block;
  margin-bottom: 16px;
`

const Mode = styled.span`
  font-family: "Gothic A1";
`
