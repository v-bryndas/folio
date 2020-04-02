import React from 'react'
import App from 'next/app'
import { AnimatePresence } from 'framer-motion'

import { createGlobalStyle } from 'styled-components'

import { Normalize } from 'styled-normalize'

const grid_columns = 8;
const gutter = 32;

let gridStyles = ``;

for(let i=1; i <= grid_columns; i++) {
  gridStyles += `.col-${i} {`;
  if(i == grid_columns) { 
    gridStyles += `flex: 0 0 100%;
    max-width: 100%;
    margin-right: 0;} `;
  } else {
    gridStyles += `flex: 0 0 calc(${i / grid_columns * 100}% - ${gutter}px);
    max-width: calc(${i / grid_columns * 100}% - ${gutter}px);
    margin-right: ${gutter}px;} `
  }
  
  gridStyles += `.row > .col-${i}:last-child {
    margin-right: 0;
    flex: 0 0 ${i / grid_columns * 100}%;
    max-width: ${i / grid_columns * 100}%;
  } `
}

for(let i=1; i <= grid_columns; i++) {
  gridStyles += ` @media screen and (max-width: 940px) { .col-tablet-${i} {`;
  if(i == grid_columns) { 
    gridStyles += `flex: 0 0 100%;
    max-width: 100%;
    margin-right: 0;} `;
  } else {
    gridStyles += `flex: 0 0 calc(${i / grid_columns * 100}% - ${gutter}px);
    max-width: calc(${i / grid_columns * 100}% - ${gutter}px);
    margin-right: ${gutter}px;} `
  }

  gridStyles += `.row > .col-tablet-${i}:last-child {
    margin-right: 0;
    flex: 0 0 ${i / grid_columns * 100}%;
    max-width: ${i / grid_columns * 100}%;
  } } `
}

for(let i=1; i <= grid_columns; i++) {
  gridStyles += ` @media screen and (max-width: 660px) { .col-mobile-${i} {`;
  if(i == grid_columns) { 
    gridStyles += `flex: 0 0 100%;
    max-width: 100%;
    margin-right: 0;} `;
  } else {
    gridStyles += `flex: 0 0 calc(${i / grid_columns * 100}% - ${gutter}px);
    max-width: calc(${i / grid_columns * 100}% - ${gutter}px);
    margin-right: ${gutter}px;} `
  }

  gridStyles += `.row > .col-mobile-${i}:last-child {
    margin-right: 0;
    flex: 0 0 ${i / grid_columns * 100}%;
    max-width: ${i / grid_columns * 100}%;
  } } `
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url("./fonts/Roboto/Roboto-Regular.eot"); /* IE9 Compat Modes */
    src: url("./fonts/Roboto/Roboto-Regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
      url("./fonts/Roboto/Roboto-Regular.otf") format("opentype"), /* Open Type Font */
      url("./fonts/Roboto/Roboto-Regular.svg") format("svg"), /* Legacy iOS */
      url("./fonts/Roboto/Roboto-Regular.ttf") format("truetype"), /* Safari, Android, iOS */
      url("./fonts/Roboto/Roboto-Regular.woff") format("woff"), /* Modern Browsers */
      url("./fonts/Roboto/Roboto-Regular.woff2") format("woff2"); /* Modern Browsers */
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url("./fonts/Roboto/Roboto-Medium.eot"); /* IE9 Compat Modes */
    src: url("./fonts/Roboto/Roboto-Medium.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
      url("./fonts/Roboto/Roboto-Medium.otf") format("opentype"), /* Open Type Font */
      url("./fonts/Roboto/Roboto-Medium.svg") format("svg"), /* Legacy iOS */
      url("./fonts/Roboto/Roboto-Medium.ttf") format("truetype"), /* Safari, Android, iOS */
      url("./fonts/Roboto/Roboto-Medium.woff") format("woff"), /* Modern Browsers */
      url("./fonts/Roboto/Roboto-Medium.woff2") format("woff2"); /* Modern Browsers */
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Alata;
    src: url("./fonts/Alata/Alata-Regular.eot"); /* IE9 Compat Modes */
    src: url("./fonts/Alata/Alata-Regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
      url("./fonts/Alata/Alata-Regular.otf") format("opentype"), /* Open Type Font */
      url("./fonts/Alata/Alata-Regular.svg") format("svg"), /* Legacy iOS */
      url("./fonts/Alata/Alata-Regular.ttf") format("truetype"), /* Safari, Android, iOS */
      url("./fonts/Alata/Alata-Regular.woff") format("woff"), /* Modern Browsers */
      url("./fonts/Alata/Alata-Regular.woff2") format("woff2"); /* Modern Browsers */
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }  

  html {
    text-rendering: optimizeLegibility;
    line-height: 1;
  }

  body {
    font-family: Roboto, sans-serif;
    background: #000;
    color: #fff;
    // overflow: hidden;
    &::-webkit-scrollbar {
      display: none;
    } 
    -ms-overflow-style: none;
  }

  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 80px;

    @media screen and (max-width: 1024px) {
      padding: 0 60px;
    }
    @media screen and (max-width: 600px) {
      padding: 0 30px;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 940px) {
    .col-tablet-h {
      display: none;
    }
  }

  ${gridStyles}
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    
    return (
      <>
        <Normalize />
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter >
            <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </>
    )
  }
}

export default MyApp;