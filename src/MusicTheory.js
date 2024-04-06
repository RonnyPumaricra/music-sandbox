export const chromaticNotes = [
  "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
]
export const musicKeys = [
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
    distribution: [0, 2, 3, 5, 7, 8, 11],
    modes: [
      "Harmonic Minor",
      null,
      null,
      null,
      "Phrygian Dominant",
    ]
  },
  {
    distribution: [0, 2, 4, 7, 9],
    modes: [
      "Major Pentatonic",
      null,
      null,
      null,
      "Minor Pentatonic",
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

export const musicChords = [
  {
    name: "Major",
    distribution: [0, 4, 7],
    abbr: root => root,
  },
  {
    name: "Minor",
    distribution: [0, 3, 7],
    abbr: root => root + "m",
  },
  {
    name: "Diminished",
    distribution: [0, 3, 6],
    abbr: root => root +  "dim",
  },
  {
    name: "Augmented",
    distribution: [0, 4, 8],
    abbr: root => root +  "+",
  },
]

export const guitarTunings = [
  {
    name: "Standard",
    distribution: [0, 5, 10, 3, 7, 0],
  },
  {
    name: "Drop",
    distribution: [0, 7, 0, 5, 9, 2],
  }
]

export function isWhiteNote(noteIndex) {
  return [0,2,4,5,7,9,11].some(i => i === noteIndex)
}