import Colors from '../../../system/colors';

export default class Snowflake {
  private _x: number;
  private _y: number;
  private _dy: number;
  private _radius: number;

  public constructor(x: number, y: number, dy:number, radius:number) {
    this._x = x;
    this._y = y;
    this._dy = dy;
    this._radius = radius;
  }

  public update(canvasData: any): void {
    if (this._y + this._radius + this._dy > canvasData.height) {  // reset snowflake
      this._y = 0;
    }

    this._y += this._dy;
  }

  public draw(canvasData: any): void {
    canvasData.context.beginPath();
    canvasData.context.arc(this._x, this._y, this._radius, 0, Math.PI * 2, false);
    canvasData.context.fillStyle = Colors.Particle.SNOWFLAKE;
    canvasData.context.fill();
    canvasData.context.closePath();
  }
}
