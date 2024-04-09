// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a sphere.
 */
function calculateVolumeOfSphere() {
  // input
  const radiusOfSphere = parseFloat(document.getElementById("radius-of-sphere").value)

  // process
  const volumeOfSphere = radiusOfSphere * Math.PI * 4/3

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfSphere.toFixed(2) + ' mm³'
}
