import Controller from '@ember/controller';

import Cookies from "../system/cookies";
import Defaults from "../system/defaults";
import Messages from "../system/messages";

export default class Settings extends Controller.extend({
  isSnowing: false,

  init() {
    this.isSnowing = Cookies.isSnowing;
  },

  actions: {
    changeSnowState() {
      this.set('isSnowing', !this.get('isSnowing'));

      if (this.get('isSnowing')) {
        this.setCookie(Defaults.Cookies.Available.IS_SNOWING, true, Defaults.Cookies.NUM_DAYS_EXPIRING);
      } else {
        this.setCookie(Defaults.Cookies.Available.IS_SNOWING, false, Defaults.Cookies.NUM_DAYS_EXPIRING);
      }
    },

    reset() {
      this.resetCookies();
      this.showMessage(Messages.COOKIES_EXPIRED);
    }
  },

  resetCookies() {
    for (let key in Defaults.Cookies.Available) {
      // @ts-ignore
      this.setCookie(Defaults.Cookies.Available[key], undefined, 0);
    }
  },

  setCookie(name: string, value: any, numDaysExpiring: number): void {
    let date: Date = new Date();
    date.setTime(date.getTime() + (numDaysExpiring * 24 * 60 * 60 * 1000));
    let expires: string = "expires="+ date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
  },

  showMessage(message: string) {
    let alert: HTMLDivElement = document.getElementById("message") as HTMLDivElement;

    alert.classList.remove("invisible");

    let messageBox: HTMLDivElement = document.createElement("div");
    messageBox.innerHTML = message;

    alert.appendChild(messageBox);
  }
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'settings': Settings;
  }
}
