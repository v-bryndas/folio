import styled from 'styled-components'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const SectionTitleStyled = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  overflow: hidden;
  height: 1em;
  span {
    display: inline-block;
    line-height: 1em;
  }
  svg {
    width: .9em;
    margin-left: 10px;
    position: relative;
    top: 3px;
    transform: rotate(45deg);
    fill: #fff;
  }
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`

function SectionTitle(props) {

  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <SectionTitleStyled
      style={props.style}
      className={props.className}
      ref={ref}
    >
      <span
      >
        {props.children}
      </span>
    </SectionTitleStyled>
  )
}

export default SectionTitle;