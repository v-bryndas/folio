import React, { Component } from 'react';
import { motion } from 'framer-motion';

import InfiniteLights from './InfiniteLights';
import { LongRaceDistortion } from './Distortions';


export default class BannerCanvas extends Component {
  componentDidMount() {
    // return;
    const options = {
      onSpeedUp: (ev) => {
      },
      onSlowDown: (ev) => {
      },
      // mountainDistortion || LongRaceDistortion || xyDistortion || turbulentDistortion || turbulentDistortionStill || deepDistortionStill || deepDistortion
      distortion: LongRaceDistortion,

      length: window.innerHeight,
      roadWidth: 13,
      islandWidth: 2,
      lanesPerRoad: 4,

      fov: 75,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,

      totalSideLightSticks: 50,
      lightPairsPerRoadWay: 50,

      // Percentage of the lane's width
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,

      /*** These ones have to be arrays of [min,max].  ***/
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],

      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],

      /****  Anything below can be either a number or an array of [min,max] ****/

      // Length of the lights. Best to be less than total length
      carLightsLength: [window.innerHeight * 0.05, window.innerHeight * 0.15],
      // Radius of the tubes
      carLightsRadius: [0.05, 0.14],
      // Width is percentage of a lane. Numbers from 0 to 1
      carWidthPercentage: [0.3, 0.5],
      // How drunk the driver is.
      // carWidthPercentage's max + carShiftX's max -> Cannot go over 1. 
      // Or cars start going into other lanes 
      carShiftX: [-0.2, 0.2],
      // Self Explanatory
      carFloorSeparation: [0.05, 1],

      colors: {
        background: 0x000000,
        /***  Only these colors can be an array ***/
        leftCars: [0xffffff, 0xffffff, 0xffffff],
        rightCars: [0xffffff, 0xffffff, 0xffffff],
      }
    };

    const myApp = new InfiniteLights(document.querySelector('.hero-canvas-wrapper'), options);
    myApp.loadAssets().then(myApp.init)
  }

  render() {
    return (
      <motion.div
        className="hero-canvas-wrapper"
        initial={{ y: '75%' }}
        animate={{ y: 0, transition: { delay: 1.5, type: 'spring', damping: 100, mass: 2 } }}
        exit={{}}></motion.div>
    )
  }
}