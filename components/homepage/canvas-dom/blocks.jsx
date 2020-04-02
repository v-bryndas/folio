import React, { createContext, useRef, useContext, useEffect } from "react"
import { useThree, useFrame } from "react-three-fiber"
import state from "../../../data/store"
import gsap, { Power4 } from "gsap"
import { Vector3 } from "three"
import lerp from 'lerp';

const offsetContext = createContext(0)

function Block({ children, scrollTop, offsetTop, ...props }) {
  const ref = useRef()
  useFrame(() => {
    const curY = ref.current.position.y
    const curTop = state.scrollTop
    ref.current.position.y = lerp(curY, curTop * 1.5, 0.1)
  }) 
  let yPos = 0;
  useEffect(() => {
    // gsap.to(ref.current.position, {
    //   y: (scrollTop + window.innerHeight) - offsetTop,
    //   duration: .5,
    //   ease: Power4
    // })
    // ref.current.position.y = (scrollTop + window.innerHeight) - offsetTop
    // console.log(scrollTop, offsetTop, ref.current)
    yPos = state.scrollTop + window.innerHeight - offsetTop;
    console.log(yPos);
  })

  return (
    <group position={[0, yPos, 0]} ref={ref} {...props}>{children}</group>
  )
}

function useBlock() {
  const { zoom } = state
  const { size, viewport } = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = viewport.width
  const viewportHeight = viewport.height
  const canvasWidth = viewportWidth
  const canvasHeight = viewportHeight
  const mobile = size.width < 700
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
  const offsetFactor = offset + 1.0
  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    offsetFactor
  }
}

export { Block, useBlock }
