import React from 'react'
import styled from 'styled-components'

import Head from '../components/head'
import ProjectList from '../components/project-list'
import projects from '../data/projects.json'

import { motion } from 'framer-motion';

import gsap, { Power3, Power4 } from 'gsap'
import { InView } from 'react-intersection-observer';

import Arrow from '../components/assets/arrow';
import SmoothScroll from '../components/smoothscroll';
import ContactLink from '../components/assets/contactLink'
import TextLink from '../components/assets/textLink'
import SectionTitle from '../components/assets/sectionTitle'
import Cross from '../components/assets/cross'
import HeroSection from '../components/homepage/heroSection'
// import IntroSection from '../components/homepage/introSection'
import Footer from '../components/footer'
import SplitLiner from '../components/framer-motion-splitliner/SplitLiner'
import CanvasDOM from '../components/homepage/canvas-dom/canvasDOM'

const SectionText = styled(motion.div)`
  color: rgba(255,255,255,.61);
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  @media screen and (max-width: 940px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`

const SocialsWrap = styled.div`
  display: flex;
  font-size: 16px;
  margin-top: 30px;
  line-height: 1.3;
  overflow: hidden;
  
  @media screen and (max-width: 560px) {
    font-size: 14px;
  }

  a {
    margin-right: 3em;
  }
`

const customVariants = {
  initial: { y: '110%' },
  enter: delay => ({ y: 0, transition: { delay, type: 'spring', mass: 1.5, damping: 100 } }),
  exit: {
    y: '100%',
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectsOffset: []
    };
    this.projectsList = React.createRef();
  }

  toggleContactLinkVisibility = () => {
    const yScroll = window.pageYOffset * 2;
    
    if(yScroll > window.innerHeight) {
      gsap.to('#contactLink', 2, {
        y: '0%',
        ease: Power4.easeOut
      })
    } else {
      gsap.to('#contactLink', 2, {
        y: '-100%',
        ease: Power4.easeOut
      })
    }
  }

  componentWillUnmount() {

  }

  // resize() {
  //   const sectionTextEl = document.getElementById('sectionText');

  //   const arr = [...sectionTextEl.children].map((el) => {
  //     var elArr = [...el.children];

  //     return elArr.map(innerEl => innerEl.innerHTML).join(' ');
  //   });

  //   sectionTextEl.innerHTML = arr.join(' ');
  // }
  
  componentDidMount() {
    document.addEventListener('touchmove', e => { e.preventDefault(); });
    // window.addEventListener('scroll', this.onScroll);
    // window.addEventListener('resize', this.resize.bind(this))
    // var observer = new IntersectionObserver(function(entries) {
    //   // isIntersecting is true when element and viewport are overlapping
    //   // isIntersecting is false when element and viewport don't overlap
    //   if(entries[0].isIntersecting === true && !this.crossIsVisible) {
    //     console.log('Element has just become visible in screen');
    //     this.crossIsVisible = true;
    //   } else if(this.crossIsVisible) {
    //     console.log('Element has just become visible in screen');
    //     this.crossIsVisible = false;

    //   }
    // }.bind(this), { threshold: [0.1] });
    // this.splitTextByLines(document.getElementById('sectionText'));
    // observer.observe(this.cross);
    this.setState({
      projectsOffset: [...this.projectsList.current.children].map(project => (
        project.getBoundingClientRect().top + window.scrollY
      ))
    });
    console.log(this.projectsList.current.children)
  }

  onScroll = () => {
    this.toggleContactLinkVisibility();
  }
  
  render() {
    const {projectsOffset} = this.state;
    console.log(projectsOffset)
    return (
      <>
        <ContactLink
          id="contactLink"
          style={{position: 'fixed', zIndex: '10', right: 0, top: 0, transform: 'translateY(-100%)'}}
        />
        <motion.div exit={{}}><Cross /></motion.div>
        {/* <CanvasDOM projectsOffset={projectsOffset} projects={projects}/> */}
        <SmoothScroll>
          <Head title={`Vasyl Bryndas | Designer x Developer`}/>
          <HeroSection />
          <div data-smooth-item style={{margin: '250px auto'}} className="container row">
            <div className="col-1 col-tablet-6">
              <SectionTitle>INTRO</SectionTitle>
            </div>
            <div className="col-6 col-mobile-8">
              <SplitLiner innerWrap={SectionText}>
                <SectionText exit={{}}>
                  My name is Vasyl Bryndas, I’m Lviv (Ukraine) based designer and developer. My passion is to create meaningful & research based solutions, using latest web technologies. I'm currently working over at <TextLink href="https://armour.agency">AR.MOUR</TextLink> design agency, with a huge emphasis on animation, UI/UX and interaction design.
                </SectionText>
              </SplitLiner>
              <InView>
                {({ inView, ref, entry }) => {
                  // console.log(entry.target.previousSibling.firstChild.childNodes);
                  let delay = 0;
                
                  if(entry) {
                    delay = 0.1 * entry.target.previousSibling.firstChild.childNodes.length;
                    console.log(entry.target.previousSibling.firstChild.childNodes);
                  }

                  return (
                    <SocialsWrap ref={ref}>
                      <motion.div custom={delay} initial="initial" animate={inView ? "enter" : ''} exit="exit" variants={customVariants}>
                        <TextLink 
                        href="https://www.instagram.com/menberusch/"
                        >Instagram</TextLink>
                        <TextLink 
                        href="https://www.facebook.com/menberusch"
                        >Facebook</TextLink>
                        <TextLink 
                        href="https://www.linkedin.com/in/vasyl-b/"
                        >LinkedIn</TextLink>
                      </motion.div>
                    </SocialsWrap>
                  )
                }}
              </InView>
            </div>
          </div>

          <div data-smooth-item  id="projectsWrap" className="container">
            <SectionTitle  style={{marginBottom: 100, display: 'flex', alignItems: 'center'}}>
              Featured Work
              <Arrow />
            </SectionTitle>
            <div className="row">
              <div className="col-1 col-tablet-h"></div>
              <ProjectList ref={this.projectsList} projects={projects} />
            </div>

          </div>

          <Footer />
        </SmoothScroll>
      </>
    );
  }
}