import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutUs from '../AppSections/AboutUs/AboutUs';
import './App.styles.scss';
import Marquee from '../AppSections/Marquee/Marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import Services from '../AppSections/Services/Services';
import FreeProposal from '../AppSections/FreeProposal/FreeProposal';
import CaseStudies from '../AppSections/CaseStudies/CaseStudies';
import OurWorkingProcess from '../AppSections/OurWorkingProcess/OurWorkingProcess';
import Team from '../AppSections/Team/Team';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to('.header', {
      paddingTop: 20,
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='app'>
      <div className='app-content'>
        <Header className='app__header' />
        <div>
          <div className='app__header-placeholder' />
          <AboutUs className='app__about-us' />
          <Marquee className='app__marquee' />
          <Services className='app__services' />
          <FreeProposal className='app__free-proposal' />
          <CaseStudies className='app__case-studies' />
          <OurWorkingProcess className='app__our-working-process' />
          <Team className='app__team' />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
