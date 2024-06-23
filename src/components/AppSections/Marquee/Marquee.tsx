import { gsap } from 'gsap';
import './Marquee.styles.scss';
import AmazonLogo from '../../../../public/assets/amazon.svg?react';
import DribbbleLogo from '../../../../public/assets/dribbble.svg?react';
import HubspotLogo from '../../../../public/assets/hubspot.svg?react';
import NotionLogo from '../../../../public/assets/notion.svg?react';
import NetflixLogo from '../../../../public/assets/netflix.svg?react';
import ZoomLogo from '../../../../public/assets/zoom.svg?react';
import { useRef, useLayoutEffect, useEffect } from 'react';

function Marquee({ className }: { className?: string }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const marqueePart = (
    <div className='marquee__part'>
      <AmazonLogo />
      <DribbbleLogo />
      <HubspotLogo />
      <NotionLogo />
      <NetflixLogo />
      <ZoomLogo />
    </div>
  );
  const timeline = gsap.timeline({ repeat: -1 });

  useLayoutEffect(() => {
    timeline
      .to(innerRef.current, { duration: 20, xPercent: -50, ease: 'none' })
      .set(innerRef.current, { xPercent: 0 });
  }, []);

  useEffect(() => {
    const marquee = innerRef.current;
    if (marquee) {
      const pauseMarquee = () => {
        timeline.pause();
      };
      const playMarquee = () => {
        timeline.play();
      };

      marquee.addEventListener('mouseenter', pauseMarquee);
      marquee.addEventListener('mouseleave', playMarquee);

      return () => {
        marquee.removeEventListener('mouseenter', pauseMarquee);
        marquee.removeEventListener('mouseleave', playMarquee);
      };
    }
  }, []);

  return (
    <section id='marquee' className={`marquee ${className || ''}`}>
      <div className='marquee__inner' ref={innerRef}>
        {marqueePart}
        {marqueePart}
      </div>
    </section>
  );
}

export default Marquee;
