import styled from 'styled-components'
import { motion } from 'framer-motion';
import TextLink from './assets/textLink';

import { useInView } from 'react-intersection-observer';

const variants = {
  initial: { y: '110%' },
  enter: i => ({ y: 0, transition: { delay: i * 0.1, type: 'spring', mass: 1.5, damping: 200 } }),
  exit: {
    y: '100%',
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const FooterStyled = styled(motion.footer)`
  padding-bottom: 80px;

  @media screen and (max-width: 1024px) {
    padding-bottom: 60px;
  }

  .footer-link {
    color: #fff;
    text-decoration: none;
    position: relative;
    font-size: 18px;
    line-height: 1.3;
    display: inline-block;
    
    &-wrap {
      margin-top: 23px;
    }
  
    @media screen and (max-width: 940px) {
      font-size: 16px;
      &-wrap { margin-top: 15px; }
    }
    @media screen and (max-width: 660px) {
      &-wrap { margin-top: 30px; }
    }
  }
`

const FooterTitle = styled.h2`
  font-size: 72px;
  font-weight: 400;
  margin: 0;
  line-height: .8;
  overflow: hidden;
  display: inline-block;
  
  .outline-text {
    -webkit-text-stroke: 0.0138em #fff;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 940px) {
    font-size: 50px;
  }
`

const SocialsWrap = styled.div`
  & > div { display: flex; margin-top: 30px; }
  font-size: 21px;
  margin-left: 150px;

  overflow: hidden;
  padding-bottom: 1px;

  .footer-link {
    margin-right: 3em;
    margin-top: 0px;
  }

  @media screen and (max-width: 940px) {
    margin-left: 0;
    a { margin-right: 1.5em; }
  }
`

const SmallCaptionText = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: rgba(255,255,255,.61);
  font-variant: small-caps;
  margin: 0;
  line-height: 1.1;
  display: inline-block;
  overflow: hidden;

  @media screen and (max-width: 660px) {
    margin-top: 50px;
  }
`

function Footer() {

  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.1
  });

  return(
    <FooterStyled data-smooth-item  ref={ref} initial="initial" animate={inView ? 'enter' : ''} exit={{}}>
      <div className="container row">
        <div className="col-6 col-tablet-5 col-mobile-8">
          <FooterTitle>
            <motion.div custom={0} variants={variants}>SAY <span className="outline-text">HELLO</span></motion.div>
          </FooterTitle>
          <SocialsWrap>
            <motion.div custom={1} variants={variants}>
              <TextLink className="footer-link" 
              href="https://www.instagram.com/menberusch/"
              >Instagram</TextLink>
              <TextLink className="footer-link"
              href="https://www.facebook.com/menberusch"
              >Facebook</TextLink>
              <TextLink className="footer-link"
              href="https://www.linkedin.com/in/vasyl-b/"
              >LinkedIn</TextLink>
            </motion.div>
          </SocialsWrap>
        </div>
        <div className="col-2 col-tablet-3 col-mobile-8">
          <SmallCaptionText>
            <motion.div custom={2} variants={variants}>START A PROJECT</motion.div>
          </SmallCaptionText>
          <div style={{overflow: 'hidden', paddingBottom: 1}}>
            <motion.div className="footer-link-wrap" custom={3} variants={variants}>
              <TextLink className="footer-link" href="mailto:vas.bryndas@gmail.com">vas.bryndas@gmail.com</TextLink>
            </motion.div>
          </div>
            
          <div style={{overflow: 'hidden', paddingBottom: 1}}>
            <motion.div className="footer-link-wrap" custom={4} variants={variants}>
              <TextLink className="footer-link" href="tel:+380930292527">(+38) 093 029 25 27</TextLink>
            </motion.div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
} 

export default Footer;