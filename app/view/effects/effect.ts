export default class Effect {
  private _callbackRequestID: number;

  public constructor() {
    // do not change the request id, it is defined as non-zero value
    this._callbackRequestID = 0;  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  }

  protected get callbackRequestID(): number {
    return this._callbackRequestID;
  }

  protected set callbackRequestID(value: number) {
    this._callbackRequestID = value;
  }

  public start(): void {
    let effectsCanvas = document.querySelector('#effects') as HTMLCanvasElement;
    effectsCanvas.width = window.innerWidth;
    effectsCanvas.height = window.innerHeight;

    let canvasContext: CanvasRenderingContext2D = effectsCanvas.getContext('2d') as CanvasRenderingContext2D;
    let canvasData: object = { context: canvasContext, width: effectsCanvas.width, height: effectsCanvas.height };

    this.init(canvasData);
    this.animate(canvasData);

    addEventListener('resize', () => {
      // resize canvas
      effectsCanvas.width = window.innerWidth;
      effectsCanvas.height = window.innerHeight;

      // stop last animation
      if (this.callbackRequestID !== 0) {
        window.cancelAnimationFrame(this.callbackRequestID);
      }

      // update
      // @ts-ignore
      canvasData.width = innerWidth;
      // @ts-ignore
      canvasData.height = innerHeight;

      this.init(canvasData);
      this.animate(canvasData);
    });
  }

  protected abstract init(canvasData: any): void;
  protected abstract animate(canvasData: any): void;
}
