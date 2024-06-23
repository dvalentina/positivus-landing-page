import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import './AboutUs.styles.scss';
import AboutUsIllustration from '../../../../public/assets/about-us-illustration.svg?react';
import { useRef, useEffect } from 'react';
import {
  floatIt,
  parallaxIt,
  rotateIt,
  scaleIt,
  spinIt,
} from '../../../animations';

function AboutUs({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef?.current;

    if (container) {
      container.addEventListener('mousemove', (e) => {
        parallaxIt(e, container, '.about-us-illustration__star', -80);
        parallaxIt(e, container, '.about-us-illustration__circle', -60);
        parallaxIt(e, container, '.about-us-illustration__megaphone', -35);
        parallaxIt(e, container, '.about-us-illustration__social', -40);
        parallaxIt(e, container, '.about-us-illustration__spring', -10);
      });
    }

    floatIt({
      targetClassName: '.about-us-illustration__circle',
      yPercent: 50,
    });
    spinIt({
      targetClassName: '.about-us-illustration__star--large',
      duration: 30,
      direction: 1,
    });
    spinIt({
      targetClassName: '.about-us-illustration__star--small',
      duration: 12,
      direction: -1,
    });
    rotateIt({
      targetClassName: '.about-us-illustration__megaphone-with-socials',
      transformOrigin: '30% 80%',
      rotation: 1,
      duration: 3,
    });
    scaleIt({
      targetClassName: '.about-us-illustration__social',
      duration: 3,
    });
  }, [containerRef]);

  return (
    <section
      id='about-us'
      className={`about-us ${className || ''}`}
      ref={containerRef}
    >
      <div className='about-us-text'>
        <Typography role='h1' type='h1' color='primary'>
          Navigating the digital landscape for success
        </Typography>
        <Typography className='about-us-text-subtitle'>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </Typography>
        <Button
          label='Book a consultation'
          variant='primary'
          onClick={(event) => event.preventDefault()}
        />
      </div>
      <AboutUsIllustration className='about-us-illustration' />
    </section>
  );
}

export default AboutUs;
