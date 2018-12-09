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

      this.checkLegacy(isLegalName, "name-field");
      this.checkLegacy(isLegalMail, "email-field");
      this.checkLegacy(isLegalMessage, "message-field");
    }
  },

  isLegalName(form: (HTMLElement | null), allowedNamePattern: RegExp): boolean {
    // @ts-ignore
    let nameField: HTMLInputElement = form[0];
    nameField.classList.remove("is-invalid");
    let names: string[] = nameField.value.split(Symbols.SPACE);

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
    let mailField: HTMLInputElement = form[1];
    mailField.classList.remove("is-invalid");
    let mail: string = mailField.value;
    return allowedMailPattern.test(mail) && mail.length >= Defaults.MAIL_ADDRESS_LENGTH;
  },

  isLegalMessage(form: (HTMLElement | null), allowedMessagePattern: RegExp) {
    // @ts-ignore
    let messageField: HTMLInputElement = form[2];
    messageField.classList.remove("is-invalid");
    let message: string = messageField.value;
    return allowedMessagePattern.test(message) && message.length >= Defaults.MESSAGE_LENGTH;
  },

  checkLegacy(isLegal: boolean, fieldId: string) {
    if (!isLegal) {
      let field: (HTMLInputElement | null) = document.querySelector("#" + fieldId);
      // @ts-ignore
      field.classList.add("is-invalid");
    }
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
