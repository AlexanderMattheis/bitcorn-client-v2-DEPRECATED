import Controller from '@ember/controller';

import Cookies from "../system/cookies";
import Defaults from "../system/defaults";

export default class Settings extends Controller.extend({
  isSnowing: false,

  init() {
    this.isSnowing = Cookies.isSnowing;
  },

  actions: {
    changeSnowState() {
      this.set('isSnowing', !this.get('isSnowing'));

      if (this.get('isSnowing')) {
        this.setCookie(Defaults.Cookies.IS_SNOWING, true, Defaults.Cookies.NUM_DAYS_EXPIRING);
      } else {
        this.setCookie(Defaults.Cookies.IS_SNOWING, false, Defaults.Cookies.NUM_DAYS_EXPIRING);
      }
    },

    reset() {
      alert("Deleted all cookies.");
    }
  },

  setCookie(name: string, value: any, numDaysExpiring: number): void {
    let date: Date = new Date();
    date.setTime(date.getTime() + (numDaysExpiring * 24 * 60 * 60 * 1000));
    let expires: string = "expires="+ date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
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
