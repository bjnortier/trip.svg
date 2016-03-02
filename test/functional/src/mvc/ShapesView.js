'use strict';

const lib = require('../../../..');
const View = lib.View;

class ShapesView extends View {

  constructor(model, scene, options) {
    super(model, scene, options);
  }

  render() {
    super.render();
    this.group
      .rect(200, 200)
      .move(10, 10)
      .fill('#f99')
      .stroke({width: 1, color: 'red'});
    this.group
      .circle(200)
      .move(110, 110)
      .fill('#69f')
      .stroke({width: 1, color: 'blue'});
  }

  update() {
    this.render();
  }

}

module.exports = ShapesView;
