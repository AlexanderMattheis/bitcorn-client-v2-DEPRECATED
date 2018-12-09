import DS from 'ember-data';

export default class Contact extends DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  message: DS.attr('string')
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'contact': Contact;
  }
}
