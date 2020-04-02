import React, { Suspense, useRef, useEffect, useState } from "react"
import { Canvas, Dom, useFrame, useLoader, useThree } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import { Block, useBlock } from "./blocks"
import "./material/CustomMaterial"
import gsap from 'gsap';
import lerp from 'lerp';
import state from "../../../data/store"

function Plane({ color = "white", map, ...props }) {
  const { viewportHeight, offsetFactor } = useBlock()
  const material = useRef()
  const refGroup = useRef()
  
  // useFrame(() => {
  //   const { scrollTop } = state
  //   material.current.scale = lerp(material.current.scale, offsetFactor - scrollTop / viewportHeight, 0.1)
  //   material.current.shift = lerp(material.current.shift, (scrollTop - last) / 150, 0.1)
  //   last = scrollTop
  // })
  // gsap.to(material.current, {
  //   scale: 0.5,
  //   shift: 0.2,
  //   duration: 1
  // });

  useEffect(() => {
    var widthHalf = (window.innerWidth / 2);
    var heightHalf = (window.innerHeight / 2);
    const meshInner = refGroup.current.children[0];
    // console.log(refGroup.current)
    // console.log((refGroup.current.position.x + 1) * window.innerWidth / 2)
    // refGroup.current.position.x = -(refGroup.current.position.x + 1) * window.innerWidth / 2 + meshInner.scale.x / 2;
    // refGroup.current.position.y = (refGroup.current.position.y + 1) * window.innerHeight / 2 - meshInner.scale.y / 2;
    // screenXY(refGroup.current, camera)
  })
  return (
    <group ref={refGroup} position={[0, 0, 0]}>
      <mesh {...props}>
        <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
        <customMaterial ref={material} attach="material" color={color} map={map} />
      </mesh>
    </group>
  )
}

function Content({src}) {
  const { contentMaxWidth } = useBlock()
  const map = useLoader(TextureLoader, src);
  const aspect = 1.6;
  map.minFilter = LinearFilter;
  return (
    <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#000000" map={map} />
  )
}

function CanvasDOM({projectsOffset, projects}) {
  const [scrollTop, setScrollTop] = useState(0);

  const onScrollCanvas = () => {
    // gsap.to(scrollArea.current, {
    //   y: -window.scrollY,
    //   duration: .5,
    //   ease: Power4
    // })
    state.scrollTop = window.scrollY;
    // setScrollTop(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollCanvas);
    // setScrollTop(window.scrollY);
  }, [])

  return (
    <Canvas style={{
      height: '100vh',
      width: '100vw',
      position: 'fixed', 
      top: '0', 
      left: '0'
    }} className="canvas" orthographic>
      <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
        {projects.map((project, i) => (
          <Block key={`canvasEl${i}`} offsetTop={projectsOffset[i]} scrollTop={scrollTop}>
            <Content src={project.thumbnail_img} />
          </Block>
        ))}
      </Suspense>
    </Canvas>
  )
}


export default CanvasDOM;