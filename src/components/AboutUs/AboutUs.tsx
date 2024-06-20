import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import './AboutUs.styles.scss';
import AboutUsIllustration from '../../../public/assets/about-us-illustration.svg?react';

function AboutUs({ className }: { className?: string }) {
  return (
    <section id='about-us' className={`about-us ${className || ''}`}>
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
