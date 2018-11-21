
import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  interface Window { bitcorn: any; }
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};

