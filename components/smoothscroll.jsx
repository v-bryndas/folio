import React, { useEffect, useRef } from 'react';
import ReactiveScroll from '../libs/reactive-scroll/src'
// import VirtualScroll from 'virtual-scroll';

export default function SmoothScroll(props) {
  const scrollArea = useRef();

  useEffect(() => {
    // window.addEventListener('scroll', onScroll);
    // window.addEventListener('resize', updateHeightState);

    // let targetY = 0;
    // console.log(VirtualScroll)
    // const scrollHeight = scrollArea.current.getBoundingClientRect().height;
    // const vr = new VirtualScroll();
    // vr.on(function(e) {
    //     targetY += e.deltaY;
    //     targetY = Math.max( (scrollHeight - window.innerHeight) * -1, targetY);
    //     targetY = Math.min(0, targetY);
    //     console.log(targetY)
    // });

    // var currentY = 0, ease = 0.1;

    // var run = function() {
    //     requestAnimationFrame(run);
    //     currentY += (targetY - currentY) * ease;
    //     var t = 'translateY(' + currentY + 'px) translateZ(0)';
    //     var s = scrollArea.current.style;
    //     s["transform"] = t;
    //     s["webkitTransform"] = t;
    //     s["mozTransform"] = t;
    //     s["msTransform"] = t;
    // }

    // run(); 
    // console.log(document.querySelector('[data-smooth]'))
    var scroll = new ReactiveScroll();
    scroll.init({
      threshold: window.innerHeight / 2
    });
    console.log('componenntDIdm')
    // const JScroll = await import('../libs/jscroll');

    // setHeight(window.innerHeight);


  }, []);

  return (
    <div
      ref={scrollArea}
      data-smooth
      // style={{
        // height: height
      // }}
    >
      {props.children}
    </div>
  )
}