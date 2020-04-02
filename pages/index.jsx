import React from 'react'
// import styled from 'styled-components'

import Head from '../components/head'
// import ProjectList from '../components/project-list'
// import projects from '../data/projects.json'

// import gsap, { Power3, Power4 } from 'gsap'
// import { InView } from 'react-intersection-observer';

// import Arrow from '../components/assets/arrow';
import SmoothScroll from '../components/smoothscroll';
// import ContactLink from '../components/assets/contactLink'
// import TextLink from '../components/assets/textLink'
// import SectionTitle from '../components/assets/sectionTitle'
import HeroSection from '../components/homepage/heroSection'
// import IntroSection from '../components/homepage/introSection'
// import Footer from '../components/footer'
// import SplitLiner from '../components/framer-motion-splitliner/SplitLiner'
// import CanvasDOM from '../components/homepage/canvas-dom/canvasDOM'

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

// const SectionText = styled.div`
//   color: rgba(255,255,255,.61);
//   font-size: 16px;
//   line-height: 1.6;
//   margin: 0;
//   @media screen and (max-width: 940px) {
//     margin-top: 30px;
//   }
//   @media screen and (max-width: 560px) {
//     font-size: 14px;
//   }
// `

// const SocialsWrap = styled.div`
//   display: flex;
//   font-size: 16px;
//   margin-top: 30px;
//   line-height: 1.3;
//   overflow: hidden;
  
//   @media screen and (max-width: 560px) {
//     font-size: 14px;
//   }

//   a {
//     margin-right: 3em;
//   }
// `

// const customVariants = {
//   initial: { y: '110%' },
//   enter: delay => ({ y: 0, transition: { delay, type: 'spring', mass: 1.5, damping: 100 } }),
//   exit: {
//     y: '100%',
//     transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
//   }
// };

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   projectsOffset: []
    // };
    // this.projectsList = React.createRef();
  }

  // toggleContactLinkVisibility = () => {
  //   const yScroll = window.pageYOffset * 2;
    
  //   if(yScroll > window.innerHeight) {
  //     gsap.to('#contactLink', 2, {
  //       y: '0%',
  //       ease: Power4.easeOut
  //     })
  //   } else {
  //     gsap.to('#contactLink', 2, {
  //       y: '-100%',
  //       ease: Power4.easeOut
  //     })
  //   }
  // }

  // resize() {
  //   const sectionTextEl = document.getElementById('sectionText');

  //   const arr = [...sectionTextEl.children].map((el) => {
  //     var elArr = [...el.children];

  //     return elArr.map(innerEl => innerEl.innerHTML).join(' ');
  //   });

  //   sectionTextEl.innerHTML = arr.join(' ');
  // }
  
  // componentDidMount() {
  //   document.addEventListener('touchmove', e => { e.preventDefault(); });
  //   // window.addEventListener('scroll', this.onScroll);
  //   // window.addEventListener('resize', this.resize.bind(this))
  //   // var observer = new IntersectionObserver(function(entries) {
  //   //   // isIntersecting is true when element and viewport are overlapping
  //   //   // isIntersecting is false when element and viewport don't overlap
  //   //   if(entries[0].isIntersecting === true && !this.crossIsVisible) {
  //   //     console.log('Element has just become visible in screen');
  //   //     this.crossIsVisible = true;
  //   //   } else if(this.crossIsVisible) {
  //   //     console.log('Element has just become visible in screen');
  //   //     this.crossIsVisible = false;

  //   //   }
  //   // }.bind(this), { threshold: [0.1] });
  //   // this.splitTextByLines(document.getElementById('sectionText'));
  //   // observer.observe(this.cross);
  //   this.setState({
  //     projectsOffset: [...this.projectsList.current.children].map(project => (
  //       project.getBoundingClientRect().top + window.scrollY
  //     ))
  //   });
  //   console.log(this.projectsList.current.children)
  // }

  onScroll = () => {
    this.toggleContactLinkVisibility();
  }
  
  render() {
    // const {projectsOffset} = this.state;
    // console.log(projectsOffset)
    return (
      <>
        {/* <ContactLink
          id="contactLink"
          style={{position: 'fixed', zIndex: '10', right: 0, top: 0, transform: 'translateY(-100%)'}}
        /> */}
        {/* <motion.div exit={{}}><Cross /></motion.div> */}
        {/* <CanvasDOM projectsOffset={projectsOffset} projects={projects}/> */}
        <Normalize />
        <GlobalStyle />
        <SmoothScroll>
          <Head title={`Vasyl Bryndas | Designer x Developer`}/>
          <HeroSection />
        <h1>Hello world</h1>
        </SmoothScroll>
      </>
    );
  }
}