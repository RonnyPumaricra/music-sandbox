import { musicKeys } from "./MusicTheory"
export class MusicApi {

  static changeMode(distribution, newMode) {
    const len = musicKeys[distribution].modes.length
    return (newMode + len) % len
  }

  static changeDistribution(newDist) {
    const len = musicKeys.length
    return (newDist + len) % len
  }
}