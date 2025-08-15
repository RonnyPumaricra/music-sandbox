import styled from "styled-components";
import { ConfigTitle } from "../ConfigTitle/ConfigTitle";
import { ChordsConfig } from "./ChordsConfig";

export function ChordsWrapper() {
  return <article>
    <StyledConfigTitle title="Chords" />

    <ChordsConfig />
  </article>
}

const StyledConfigTitle = styled(ConfigTitle)`
  text-align: right;
`