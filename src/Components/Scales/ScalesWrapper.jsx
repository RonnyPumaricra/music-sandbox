// import styled from "styled-components";
import { ScalesConfig } from "./ScalesConfig";
import { ConfigTitle } from "../ConfigTitle/ConfigTitle";

export function ScalesWrapper({
  setScaleMode,
  setScaleDistribution,
  setRootNote
}) {
  return <article>
    <ConfigTitle title="Scales" />

    <ScalesConfig
      setScaleMode={setScaleMode}
      setScaleDistribution={(newDist) => {
        setScaleDistribution(newDist)
        setScaleMode(0)
      }}
      setRootNote={setRootNote}
    />
  </article>
}