import Cookies from '../system/cookies';
import Defaults from "../system/defaults";

export function initialize(): void {
  Cookies.isSnowing = getCookieValue(Defaults.Cookies.Available.IS_SNOWING)
}

function getCookieValue(name: string): any {
  name = name + "=";
  let cookieParams: string[] = document.cookie.split(';');

  for(let i: number = 0; i < cookieParams.length; i++) {
    let param: string = cookieParams[i];

    if (param.indexOf(name) === 0) {
      return JSON.parse(param.substring(name.length, param.length));
    }
  }

  // @ts-ignore
  return undefined;
}

export default {
  before: 'snowflakes-initializer',
  initialize
};
