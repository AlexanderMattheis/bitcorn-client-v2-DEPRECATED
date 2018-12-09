import Controller from '@ember/controller';
import Defaults from "../system/defaults";
import Regex from "../system/regex";
import Symbols from "../system/symbols"

export default class Contact extends Controller.extend({
  actions: {
    submit(): void {
      let form: (HTMLElement | null) = document.querySelector(".needs-validation");

      debugger;
      // test correctness
      let isLegalName: boolean = this.isLegalName(form, new RegExp(Regex.AllowedPattern.NAME));
      let isLegalMail: boolean = this.isLegalMail(form, new RegExp(Regex.AllowedPattern.MAIL));
      let isLegalMessage: boolean = this.isLegalMessage(form, new RegExp(Regex.AllowedPattern.MESSAGE));

      alert("Legal Name: " + isLegalName
        + ", Legal E-Mail: " + isLegalMail
        + ", Legal Message: " + isLegalMessage);
    }
  },

  isLegalName(form: (HTMLElement | null), allowedNamePattern: RegExp): boolean {
    // @ts-ignore
    let names: string[] = form[0].value.split(Symbols.SPACE);

    let isCorrectName: boolean = true;

    for (let i: number = 0; i < names.length; i++) {
      if (names[i].length > 0) {  // to ignore empty space
        let name: string = names[i];

        if (!allowedNamePattern.test(name)) {
          isCorrectName = false;
        }
      }
    }

    return isCorrectName;
  },

  isLegalMail(form: (HTMLElement | null), allowedMailPattern: RegExp) {
    // @ts-ignore
    let mail: string = form[1].value;
    return allowedMailPattern.test(mail) && mail.length >= Defaults.MAIL_ADDRESS_LENGTH;
  },

  isLegalMessage(form: (HTMLElement | null), allowedMessagePattern: RegExp) {
    // @ts-ignore
    let message: string = form[2].value;
    return allowedMessagePattern.test(message) && message.length >= Defaults.MESSAGE_LENGTH;
  }
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'contact': Contact;
  }
}
