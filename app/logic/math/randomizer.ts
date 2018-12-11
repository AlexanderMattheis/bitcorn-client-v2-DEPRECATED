export default class Randomizer {
  public static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);  // since using pixels, only integers
  }
}
