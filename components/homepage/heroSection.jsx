import styled from 'styled-components';

import SectionTitle from '../assets/sectionTitle'
import BannerCanvas from './banner-animations/BannerCanvas'
import ContactLink from '../assets/contactLink';

function HeroSection() {

  return(
    <section data-smooth-item>
      <div className="container">
        <header>
          <SectionTitle>Vasyl Bryndas</SectionTitle>
          <ContactLink style={{
            position: 'relative',
            top: '-.9em',
            right: '-1em'
          }} />
        </header>
        {/* <BannerCanvas /> */}
        <h2 initial={{}} exit={{}}>
          <span className="banner-title-word-wrap"  >
            <span className="banner-title-word"  >
              Designer
            </span>
          </span>
          <span className="banner-title-word-wrap">
            <span className="banner-title-word" >
              x
            </span>
          </span>
          <span className="banner-title-word-wrap"  >
            <span className="banner-title-word" >
              Developer
            </span>
          </span>
        </h2>
      </div>
    </section>
  )
}

export default HeroSection;