import { motion } from 'framer-motion';
import styled from 'styled-components';

import SectionTitle from '../assets/sectionTitle'
import BannerCanvas from './banner-animations/BannerCanvas'
import ContactLink from '../assets/contactLink';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const variants = {
  initial: { y: '110%' },
  enter: { y: 0, transition: { delay: 1.5, type: 'spring', mass: 1.5, damping: 100 } },
  exit: {
    y: '100%',
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const bannerTitleWordVariants = {
  initial: { y: '100%', color: 'rgba(255,255,255,0)' },
  enter: delay => ({ 
    y: 0, 
    color: 'rgba(255,255,255,1)',
    transition: { 
      y: { type: 'spring', damping: 100, mass: 1.5, delay },
      color: { duration: .5, delay: 1.5, ease: 'easeIn' }
    }
  })
}

const bannerTitleWordWrapVariants = {
  initial: y => ({ y }),
  enter: {
    y: 0,
    transition: { delay: 1.5, type: 'spring', damping: 100, mass: 1.5, stiffness: 50 }
  }
}

const HeroSectionStyled = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  .container { 
    height: 100%;
    padding: 80px;

    @media screen and (max-width: 940px) {
      padding: 60px;
    }
    @media screen and (max-width: 600px) {
      padding: 30px 20px;
    }

  }
  
  .hero-canvas-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform: translateY(75%);
  }

  canvas {
    width: 100%;
    height: 100%;
  }
`
const BannerTitle = styled(motion.h1)`
  font-family: Alata, sans-serif;
  font-size: ${120 / (900 * 0.01)}vh;
  
  @media screen and (max-aspect-ratio: 14/9) {
    font-size: ${90 / (1440 * 0.01)}vw;
  }
  @media screen and (max-width: 940px) {
    font-size: 60px;
  }
  
  letter-spacing: -.02em;
  font-weight: 400;
  text-align: center;
  margin: 0;
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 600px) {
    padding: 0 20px;
    top: 40%;
  } 

  span {
    display: inline-block;
    @media screen and (max-width: 600px) {
      display: block;
      width: 100%;
    }
  }

  .banner-title-word {
    height: 100%;
    transform: translateY(100%);
  }
  
  .banner-title-word-wrap {
    overflow: hidden;
    height: 1.2em;
    -webkit-text-stroke: #fff .00833334em;;

    &:nth-child(2) { 
      margin: 0 .2em;
      -webkit-text-fill-color: transparent; 
      
      @media screen and (max-width: 600px) {
        margin: .1em 0;
        line-height: .2em;
        height: .55em;
        font-size: 80px;
      }
    }
    &:first-child, &:last-child {
      padding-right: .05em;
      @media screen and (max-width: 600px) {
        padding: 0;
      }
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`

function HeroSection() {

  return(
    <HeroSectionStyled data-smooth-item>
      <div className="container">
        <Header>
          <SectionTitle variants={variants}>Vasyl Bryndas</SectionTitle>
          <ContactLink variants={variants} style={{
            position: 'relative',
            top: '-.9em',
            right: '-1em'
          }} />
        </Header>
        <BannerCanvas />
        <BannerTitle initial={{}} exit={{}}>
          <motion.span className="banner-title-word-wrap" custom="-75%" initial="initial" animate="enter" variants={bannerTitleWordWrapVariants}>
            <motion.span className="banner-title-word" custom={0} initial="initial" animate="enter" variants={bannerTitleWordVariants}>
              Designer
            </motion.span>
          </motion.span>
          <span className="banner-title-word-wrap">
            <motion.span className="banner-title-word" custom={0.2} initial="initial" animate="enter" variants={bannerTitleWordVariants}>
              x
            </motion.span>
          </span>
          <motion.span className="banner-title-word-wrap" custom="75%" initial="initial" animate="enter" variants={bannerTitleWordWrapVariants}>
            <motion.span className="banner-title-word" custom={0.4} initial="initial" animate="enter" variants={bannerTitleWordVariants}>
              Developer
            </motion.span>
          </motion.span>
        </BannerTitle>
      </div>
    </HeroSectionStyled>
  )
}

export default HeroSection;