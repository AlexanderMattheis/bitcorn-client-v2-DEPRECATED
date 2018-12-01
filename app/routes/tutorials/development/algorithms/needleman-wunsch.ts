import Route from '@ember/routing/route';
import { on } from '@ember/object/evented';
import ControlsFunctions from "../../../../view/controls-functions";

export default class TutorialsDevelopmentAlgorithmsNeedlemanWunsch extends Route.extend({
  cleanUp: on('deactivate', function(){
    ControlsFunctions.cleanOverlay();
    window.bitcorn.solutionNumber = 0;
  })
}) {
  // normal class body definition here
}
