export const chromaticNotes = [
  "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"
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
    // leadingKey: "Blues Minor",
    distribution: [0, 3, 5, 6, 7, 10],
    modes: [
      "Blues Minor",
      "Blues Major"
    ]
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