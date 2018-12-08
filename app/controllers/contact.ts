import Controller from '@ember/controller';

export default class Contact extends Controller.extend({
  submit() {
    alert("Works");
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
