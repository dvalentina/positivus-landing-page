import Typography from '../Typography/Typography';
import './Footer.styles.scss';
import PositivusLogo from '../../../public/assets/positivus-logo.svg?react';
import LinkedinLogo from '../../../public/assets/linkedin.svg?react';
import FacebookLogo from '../../../public/assets/facebook.svg?react';
import TwitterLogo from '../../../public/assets/twitter.svg?react';
import Button from '../Button/Button';

function Footer() {
  const navigationLinks = [
    { name: 'About Us', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'Use Cases', link: '/' },
    { name: 'Prices', link: '/' },
    { name: 'Blog', link: '/' },
  ];

  const navigationLinksComponents = navigationLinks.map((item) => (
    <a href={item.link} className='footer-link'>
      <Typography role='span' type='p' color='secondary'>
        {item.name}
      </Typography>
    </a>
  ));

  return (
    <footer className='footer'>
      <div className='footer-navigation footer__footer-navigation'>
        <PositivusLogo className='footer-logo' />
        <div className='footer-navigation-links'>
          {navigationLinksComponents}
        </div>
        <div className='footer-social-icons'>
          <LinkedinLogo />
          <FacebookLogo />
          <TwitterLogo />
        </div>
      </div>
      <div className='footer-contacts-wrapper'>
        <div className='footer-contact-us'>
          <Typography role='h4' type='h4' color='primary' highlight='accent'>
            Contact us:
          </Typography>
          <div className='footer-contacts-list'>
            <Typography role='p' type='p' color='secondary'>
              Email: info@positivus.com
            </Typography>
            <Typography role='p' type='p' color='secondary'>
              Phone: 555-567-8901
            </Typography>
            <Typography role='p' type='p' color='secondary'>
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </Typography>
          </div>
        </div>
        <form className='footer-subscribe-form'>
          <input className='footer-input' placeholder='Email'></input>
          <Button
            label='Subscribe to news'
            variant='tertiary'
            onClick={(event) => event.preventDefault()}
          />
        </form>
      </div>
      <hr />
      <div className='footer-signature'>
        <Typography role='span' type='p' color='secondary'>
          © 2023 Positivus. All Rights Reserved.
        </Typography>
        <a href='/' className='footer-link'>
          <Typography role='span' type='p' color='secondary'>
            Privacy Policy
          </Typography>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
