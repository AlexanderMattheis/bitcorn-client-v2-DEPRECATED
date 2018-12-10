import Defaults from "../system/defaults";
import Snowflake from "../view/elements/snowflake";

let snowflakes: Snowflake[];
let snowflakesRequestID: number;

export function initialize(): void {
  let effectsCanvas = document.querySelector('#effects') as HTMLCanvasElement;
  effectsCanvas.width = window.innerWidth;
  effectsCanvas.height = window.innerHeight;

  let canvasContext: CanvasRenderingContext2D = effectsCanvas.getContext('2d') as CanvasRenderingContext2D;
  let canvasData: object = { context: canvasContext, width: effectsCanvas.width, height: effectsCanvas.height};

  init(canvasData);
  animate(canvasData);

  addEventListener('resize', () => {
    // resize canvas
    effectsCanvas.width = window.innerWidth;
    effectsCanvas.height = window.innerHeight;

    // stop last animation
    if (snowflakesRequestID !== undefined) {
      window.cancelAnimationFrame(snowflakesRequestID);
    }

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

  let numSnowFlakes = Math.floor((canvasData.width * canvasData.height) * Defaults.Effects.PERCENT_SNOWFLAKES);

  for (let i = 0; i < numSnowFlakes; i++){
    let radius = getRandomNumber(4, 8);

    let x = getRandomNumber(radius, canvasData.width - radius);
    let y = getRandomNumber(radius, canvasData.height - radius);
    let dy = getRandomNumber(1, 2);

    snowflakes.push(new Snowflake(x, y, dy, radius));
  }

  console.log(snowflakes.length);
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);  // since using pixels, only integers
}

function animate(canvasData: any): void {
  snowflakesRequestID = window.requestAnimationFrame(function() {
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
