import Defaults from "../../system/defaults";
import Effect from "./effect";
import Randomizer from "../../logic/math/randomizer";
import Snowflake from "./particle/snowflake";

export default class Snow extends Effect {
  private _snowflakes: Snowflake[];

  public constructor() {
    super();
    this._snowflakes = [];
  }

  private get snowflakes(): Snowflake[] {
    return this._snowflakes;
  }

  private set snowflakes(value: Snowflake[]) {
    this._snowflakes = value;
  }

  /**
   * @override
   */
  protected init(canvasData: any): void {
    this.snowflakes = [];

    let numSnowFlakes = Math.floor((canvasData.width * canvasData.height) * Defaults.Effects.PERCENT_SNOWFLAKES);

    for (let i = 0; i < numSnowFlakes; i++){
      let radius = Randomizer.getRandomNumber(4, 8);

      let x = Randomizer.getRandomNumber(radius, canvasData.width - radius);
      let y = Randomizer.getRandomNumber(radius, canvasData.height - radius);
      let dy = Randomizer.getRandomNumber(1, 2);

      this.snowflakes.push(new Snowflake(x, y, dy, radius));
    }
  }

  /**
   * @override
   */
  protected animate(canvasData: any): void {
    this.callbackRequestID = window.requestAnimationFrame(() => {
      this.animate(canvasData);
    });

    canvasData.context.clearRect(0, 0, canvasData.width, canvasData.height);

    for (let i = 0; i < this.snowflakes.length; i++){
      this.snowflakes[i].update(canvasData);
      this.snowflakes[i].draw(canvasData);
    }
  }
}
