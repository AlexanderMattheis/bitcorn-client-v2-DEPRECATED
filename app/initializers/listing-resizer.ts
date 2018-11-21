import Application from '@ember/application';

export function initialize(application: Application): void {
    window.navigator.imageHasBeenEnlarged = false;
}

export default {
  initialize
};
