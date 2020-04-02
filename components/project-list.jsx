import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, forwardRef } from 'react';

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const ProjectTitle = styled.h2`
  font-size: 80px;
  margin: 0 0 10px;
  overflow: hidden;
  height: 1em;
  font-weight: 400;
  
  span {
    display: inline-block;
    line-height: 1em;
  }
`

const ProjectWrap = styled.div`
  margin-bottom: 150px;
  position: relative;
  z-index: 9;

  .custom-class {
    position: absolute;
    top: 0;
    right: 0;
  }
`

const ProjectExcerpt = styled.p`
  color: rgba(255,255,255,.61);
  font-size: 16px;  
  margin: 30px 0 0;
`

const ProjectHeader = styled.div`
  font-family: Alata, sans-serif;
`

const ProjectNumber = styled.span`
  position: absolute;
  z-index: -1;
  font-size: 150px;
  line-height: 0.8;
  right: 0;
  top: 0;
  opacity: .24;
  letter-spacing: -.11em;
  -webkit-text-stroke: .03em;
`

const ProjectList = forwardRef((props, ref) => {

  const { projects } = props;

  return (
    <motion.div
      className="col-6 col-mobile-8"
      initial="initial"
      animate="enter"
      exit="exit"
      ref={ref}
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {projects.map((project, i) => {
        return (
          <ProjectWrap key={i}>
            <motion.div variants={postVariants}>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectNumber data-smooth-item data-speed={1.05}>{`0${i + 1}`}</ProjectNumber>
              </ProjectHeader>
              <Link scroll={false} href="/projects/[projects]" as={`/projects/${project.slug}`}>
                <a>
                  <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
                    {/* <img data-smooth-item data-speed={0.95} width="100%" src={project.thumbnail_img} /> */}
                  </motion.div>
                </a>
              </Link>
              <ProjectExcerpt>{project.excerpt}</ProjectExcerpt>
            </motion.div>
          </ProjectWrap>
        );
      })}
    </motion.div>
  );
});

export default ProjectList;