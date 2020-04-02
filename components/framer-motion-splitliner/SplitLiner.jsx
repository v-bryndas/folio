import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import TextLink from '../assets/textLink'
import { useInView } from 'react-intersection-observer';

const variants = {
  initial: { y: '110%' },
  enter: i => ({ y: 0, transition: { delay: i * 0.1, type: 'spring', mass: 1.5, damping: 100 } }),
  exit: {
    y: '100%',
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

function SplitLiner(props) {
  const splitLineWrap = React.createRef();

  const [lineTags, setLineTags] = useState([]);
  
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.1
  })

  const splitTextByLines = el => {
    const sectionTextEl = el;

    // Wrap every word in span tag
    const textContentByWordArr = sectionTextEl.textContent.split(' ');

    let textContentByWordSpanArr = textContentByWordArr.map(word => {
      let spanContent = word;

      [...sectionTextEl.children].forEach((innerTag) => {
        if(innerTag.textContent === word) spanContent = innerTag.outerHTML;
      });

      return `<span>${spanContent}</span>`;
    });

    sectionTextEl.innerHTML = textContentByWordSpanArr.join(' ')

    // Calculate new line start
    
    textContentByWordSpanArr = [...sectionTextEl.children];

    let textContentByLinesArr = [];
    
    textContentByWordSpanArr.forEach((spanTag, i) => {
      if(i === 0) {
        textContentByLinesArr.push([spanTag])
      } else {
        if(spanTag.getBoundingClientRect().top > textContentByWordSpanArr[i - 1].getBoundingClientRect().top) {
          textContentByLinesArr.push([]);
        }
        textContentByLinesArr[textContentByLinesArr.length - 1].push(spanTag)
      }
    });

    textContentByLinesArr = textContentByLinesArr.map(lineSpanArr => {
      let lineStringArr = [];
      
      lineSpanArr.forEach((spanTag, i) => {

        const element = spanTag.childNodes[0];
        const isElement = element instanceof Element || element instanceof HTMLDocument;

        if(isElement) {
          lineStringArr.push(<TextLink key={`textLink_${i}`}>{element.textContent}</TextLink>, ' ');
        } else {
          lineStringArr.push(spanTag.textContent, ' ');
        }
      });


      return lineStringArr;
    });

    setLineTags(textContentByLinesArr)
  }

  useEffect(() => {
    splitTextByLines(splitLineWrap.current.firstChild);
  }, []);

  let content = props.children;

  const InnerWrap = props.innerWrap ? props.innerWrap : motion.div;

  if(lineTags.length) {
    content = lineTags.map((line, i) => {
      return(
        <div style={{overflow: 'hidden'}} key={`line${i}`}>
          <motion.div custom={i} initial="initial" animate={inView ? 'enter' : ''} exit="exit" variants={variants}>
            {line}
          </motion.div>
        </div>
      )
    });
  }
  console.log(content.length)
  return(
    <div ref={ref}>
      <InnerWrap 
        ref={splitLineWrap} 
        animate={{transition: { delayChildren: 0.5}}}
        exit={{}}
      >
        {content}
      </InnerWrap>
    </div>
  )
}

export default SplitLiner;