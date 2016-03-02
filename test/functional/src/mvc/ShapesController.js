'use strict';

const tripcore = require('trip.core');
const tripdom = require('trip.dom');
const $ = tripdom.$;

const lib = require('../../../..');
const ShapesView = require('./ShapesView');

class ShapesController extends tripcore.Controller {

  constructor() {
    super(new tripcore.Model());

    var scene = new lib.Scene($('#viewport'));
    this.addView(scene, ShapesView);
  }

}

module.exports = ShapesController;
