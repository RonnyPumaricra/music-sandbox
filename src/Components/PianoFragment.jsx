import { useContext } from "react";
import styled from "styled-components";
import {
  ChordDistributionContext,
  ChordRootNoteContext,
  PageIndexContext,
  ScaleRootNoteContext,
  ScaleDistributionContext,
  ScaleModeContext,
} from "../App";
import {
  chromaticNotes,
  isWhiteNote,
  musicChords,
  musicKeys,
} from "./music/MusicTheory";

function PianoWhiteKey({ chromaticNote, ...delegated }) {
  return (
    <StyledWhiteKey {...delegated}>
      <NoteName>{chromaticNotes[chromaticNote]}</NoteName>
    </StyledWhiteKey>
  );
}

export function PianoFragment({ setScaleRootNote, setChordRootNote }) {
  const pageIndex = useContext(PageIndexContext);
  const rootNote = useContext(ScaleRootNoteContext);
  const scaleDistribution = useContext(ScaleDistributionContext);
  const scaleMode = useContext(ScaleModeContext);
  const chordDistribution = useContext(ChordDistributionContext);
  const chordRootNote = useContext(ChordRootNoteContext);

  let pianoKeys = [];

  if (pageIndex === 0) {
    const distribution = musicKeys[scaleDistribution].distribution;
    const moddedDistribution = distribution.map((el) => {
      let newRootNote = distribution[scaleMode];
      return (el - newRootNote + 12) % 12;
    });

    for (let i = 0; i < 12; i++) {
      pianoKeys[i] = {};
      pianoKeys[i].isWhite = isWhiteNote((rootNote + i) % 12);
      pianoKeys[i].isHighlighted = moddedDistribution.some((el) => el === i);
      pianoKeys[i].isRootNote = i === 0;
      pianoKeys[i].chromaticNote = (rootNote + i) % 12;
    }
  } else {
    const currentChordDistribution =
      musicChords[chordDistribution].distribution;

    for (let i = 0; i < 12; i++) {
      pianoKeys[i] = {};
      pianoKeys[i].isWhite = isWhiteNote((chordRootNote + i) % 12);
      pianoKeys[i].isHighlighted = currentChordDistribution.some(
        (el) => el === i
      );
      pianoKeys[i].isRootNote = i === 0;
      // pianoKeys[i].isRootNote = i === chordRootNote
      pianoKeys[i].chromaticNote = (chordRootNote + i) % 12;
    }
  }

  return (
    <PianoWrapper>
      {pianoKeys.map((el, i) => {
        const PianoKey = el.isWhite ? PianoWhiteKey : PianoBlackKey;

        return (
          <PianoKey
            key={i}
            onClick={() => {
              if (pageIndex == 0) setScaleRootNote(el.chromaticNote);
              else setChordRootNote(el.chromaticNote);
            }}
            $highlighted={el.isHighlighted}
            $rootNote={el.isRootNote}
            chromaticNote={el.chromaticNote}
          />
        );
      })}
    </PianoWrapper>
  );
}

const PianoWrapper = styled.div`
  display: flex;
  margin-top: 3rem;

  margin-left: auto;
  margin-right: auto;

  /* flex: 1; */
`;

const StyledWhiteKey = styled.div`
  width: 3rem;
  height: 10rem;
  border: 1px solid gray;
  background: ${(p) =>
    p.$rootNote ? "magenta" : p.$highlighted ? "pink" : "white"};

  display: flex;
  justify-content: center;
  align-items: end;

  z-index: 1;

  transition: background 500ms;
`;

const NoteName = styled.span``;

const PianoBlackKey = styled.div`
  --width: 1.5rem;
  width: var(--width);
  height: 6rem;
  border: 1px solid gray;
  margin-left: calc(var(--width) * -0.5);
  margin-right: calc(var(--width) * -0.5);

  background: ${(p) =>
    p.$rootNote ? "red" : p.$highlighted ? "tomato" : "black"};

  z-index: 2;
`;
