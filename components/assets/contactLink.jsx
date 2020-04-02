import styled from 'styled-components'
import gsap, { Power4 } from 'gsap'
import Arrow from './arrow';

import {motion} from 'framer-motion'
import { useRef } from 'react';

const arrPower4 = [
  [0,0.494,0.192,0.726],
  [0.318,0.852,0.45,0.984],
  [0.504,1,1,1]
];

const ContactLinkStyled = styled.a`
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  fill: #fff;
  padding: 1em;

  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
  
  .contact-link-inner {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: .9em;
    
    span {
      display: inline-block;
      line-height: .9em;
      opacity: 0.61;
      transition: opacity .2s ease;
    }
  }

  &:hover span { opacity: 1 }
`

function ContactLink(props) {
  let contactTimeoutID;
  const spanEl = useRef(null);

  const hoverContactLink = () => {

    if(!contactTimeoutID) {
      gsap.to(spanEl.current, {
        duration: .25,
        y: `-100%`,
        ease: Power4.easeOut
      });
      
      contactTimeoutID = setTimeout(() => {
        gsap.fromTo(spanEl.current, {y: `100%`}, {
          duration: .25,
          y: 0,
          ease: Power4.easeOut
        });
        contactTimeoutID = null;
      }, 250)
    }
  }

  return(
    <ContactLinkStyled
          onMouseEnter={hoverContactLink}
          href="mailto:vas.bryndas@gmail.com"
          id={props.id}
          style={props.style}
        >
      <div className="contact-link-inner">
        <motion.div 
          initial="initial"
          animate="enter"
          exit="exit"
          variants={props.variants}
        >
          <span ref={spanEl}>Get in touch</span>
          <Arrow style={{width: '.7em', marginLeft: 10}} />
        </motion.div>
      </div>
    </ContactLinkStyled>
  )
}

export default ContactLink;