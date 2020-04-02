import React, { useEffect } from 'react'
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const CrossWrapStyled = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 0%;
  transform: translateY(-101%);
  z-index: 8;
`
const CrossStyled = styled.div`
  width: 15vw;
  height: 15vw;
  position: relative;

  &:before, &:after { 
    content: '';
    background: #fff;
    position: absolute;
  }
  &:before {
    left: 0;
    top: 50%;
    width: 100%;
    height: 20%;
    transform: translateY(-50%);
  }
  &:after {
    top: 0;
    left: 50%;
    height: 100%;
    width: 20%;
    transform: translateX(-50%);
  }
`

function Cross() {
  const controls = useAnimation();

  const toggleCrossAnimation = () => {
    const yScroll = window.pageYOffset * 2;
    const projects_wrap = document.getElementById('projectsWrap');
    const crossStartScroll = yScroll - projects_wrap.offsetTop;
    
    if (crossStartScroll > -window.innerHeight) {
      controls.start({
        y: crossStartScroll * 0.25,
        rotate: crossStartScroll * 0.2,
        transition: { duration: .75, ease: 'easeOut' }
      });
    } else {
      controls.start({
        y: '-101%',
        transition: { duration: .75, ease: 'easeOut' }
      });
    }
  }

  useEffect(() => window.addEventListener('scroll', toggleCrossAnimation));

  return (
    <CrossWrapStyled animate={controls}>
      <CrossStyled />
    </CrossWrapStyled>
  )
}

export default Cross;