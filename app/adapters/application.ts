import DS from 'ember-data';

export default class Application extends DS.JSONAPIAdapter.extend({
    namespace: "api" // to make request to "/api"
}) {
  // normal class body
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    'application': Application;
  }
}
