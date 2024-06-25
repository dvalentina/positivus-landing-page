import Button from '../../Button/Button';
import Input from '../../Input/Input';
import RadioButton from '../../RadioButton/RadioButton';
import SectionHeading from '../../SectionHeading/SectionHeading';
import TextArea from '../../TextArea/TextArea';
import './ContactUs.styles.scss';
import ContactUsIllustration from '../../../../public/assets/contact-us-Illustration.svg?react';
import { useEffect, useRef } from 'react';
import { floatIt, parallaxIt, spinIt } from '../../../animations';

function ContactUs({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef?.current;

    if (container) {
      container.addEventListener('mousemove', (e) => {
        // parallaxIt(e, container, '.contact-us-illustration__circle-star', -10);
        parallaxIt(e, container, '.contact-us-illustration__star--large', -20);
        parallaxIt(e, container, '.contact-us-illustration__star--small', -60);
      });
    }

    floatIt({
      targetClassName: '.contact-us-illustration__star--large',
      yPercent: 5,
    });
    floatIt({
      targetClassName: '.contact-us-illustration__star--small',
      yPercent: 25,
    });
    // spinIt({
    //   targetClassName: '.contact-us-illustration__circle-star',
    //   duration: 60,
    //   direction: -1,
    // });
  }, [containerRef]);

  return (
    <section id='contact-us' className={`contact-us ${className}`}>
      <SectionHeading>
        <SectionHeading.Title>Contact Us</SectionHeading.Title>
        <SectionHeading.Subtitle width='323px'>
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </SectionHeading.Subtitle>
      </SectionHeading>
      <div className='contact-us-container' ref={containerRef}>
        <form className='contact-us-form'>
          <fieldset className='contact-us-form__radio-buttons'>
            <RadioButton
              label='Say Hi'
              name='email'
              value='Say Hi'
              id='say-hi'
              checked
            />
            <RadioButton
              label='Get a Quote'
              name='email'
              value='Get a Quote'
              id='get-quote'
            />
          </fieldset>
          <fieldset className='contact-us-form__inputs'>
            <Input
              type='text'
              placeholder='Name'
              name='name'
              id='name'
              label='Name'
            />
            <Input
              type='email'
              placeholder='Email'
              name='email'
              id='email'
              label='Email*'
              required
            />
            <TextArea
              label='Message*'
              id='message'
              name='message'
              placeholder='Message'
              required
            />
          </fieldset>
          <Button type='submit' label='Send Message' />
        </form>
        <ContactUsIllustration className='contact-us__illustration' />
      </div>
    </section>
  );
}

export default ContactUs;
