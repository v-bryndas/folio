import styled from 'styled-components'
import { motion } from 'framer-motion'

const TextLinkStyled = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  .underline {
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background: #fff;
    transform-origin: left;
    bottom: -1px;
    left: 0;
  }
`

const variants = {
  hover: {
    scaleX: 1,
    transformOrigin: 'left',
    transition: { type: 'spring', mass: 0.5, damping: 200 }
  }
}

const TextLink = (props) => (
  <TextLinkStyled className={props.className} whileHover="hover" target="_blank" href={props.href} style={props.style}>
    {props.children}
    <motion.span initial={{scaleX: 0, transformOrigin: 'right'}} variants={variants} className="underline" />
  </TextLinkStyled>
)

export default TextLink;