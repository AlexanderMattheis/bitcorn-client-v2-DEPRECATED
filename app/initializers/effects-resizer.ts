import Defaults from "../system/defaults";
import Snowflake from "../view/elements/snowflake";

let snowflakes: Snowflake[];

export function initialize(): void {
  let effectsCanvas = document.querySelector('#effects') as HTMLCanvasElement;
  effectsCanvas.width = window.innerWidth;
  effectsCanvas.height = window.innerHeight;

  let canvasContext: CanvasRenderingContext2D = effectsCanvas.getContext('2d') as CanvasRenderingContext2D;
  let canvasData: object = { context: canvasContext, width: effectsCanvas.width, height: effectsCanvas.height};

  init(canvasData);
  animate(canvasData);

  addEventListener('resize', () => {
    // update
    // @ts-ignore
    canvasData.width = innerWidth;
    // @ts-ignore
    canvasData.height = innerHeight;

    init(canvasData);
    animate(canvasData);
  });
}

function init(canvasData: any): void {
  snowflakes = [];

  for (let i = 0; i < Defaults.Effects.NUMBER_SNOWFLAKES; i++){
    let radius = getRandomNumber(4, 8);

    let x = getRandomNumber(radius, canvasData.width - radius);
    let y = getRandomNumber(radius, canvasData.height - radius);
    let dy = getRandomNumber(1, 2);

    snowflakes.push(new Snowflake(x, y, dy, radius));
  }
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function animate(canvasData: any): void {
  window.requestAnimationFrame(function() {
    animate(canvasData);
  });

  canvasData.context.clearRect(0, 0, canvasData.width, canvasData.height);

  for (let i = 0; i < snowflakes.length; i++){
    snowflakes[i].update(canvasData);
    snowflakes[i].draw(canvasData);
  }
}

export default {
  initialize
};
