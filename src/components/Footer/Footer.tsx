import Typography from '../Typography/Typography';
import './Footer.styles.scss';
import PositivusLogo from '../../../public/assets/positivus-logo.svg?react';
import LinkedinLogo from '../../../public/assets/linkedin.svg?react';
import FacebookLogo from '../../../public/assets/facebook.svg?react';
import TwitterLogo from '../../../public/assets/twitter.svg?react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-navigation footer__footer-navigation'>
        <PositivusLogo className='logo' />
        <div className='footer-navigation-links'>
          <Typography role='span' type='p' color='secondary'>
            About Us
          </Typography>
          <Typography role='span' type='p' color='secondary'>
            Services
          </Typography>
          <Typography role='span' type='p' color='secondary'>
            Use Cases
          </Typography>
          <Typography role='span' type='p' color='secondary'>
            Prices
          </Typography>
          <Typography role='span' type='p' color='secondary'>
            Blog
          </Typography>
        </div>
        <div className='footer-social-icons'>
          <LinkedinLogo />
          <FacebookLogo />
          <TwitterLogo />
        </div>
      </div>
      <div className='contacts-wrapper'>
        <div className='contact-us'>
          <Typography role='h4' type='h4' color='primary' highlight='accent'>
            Contact us:
          </Typography>
          <div className='contacts-list'>
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
        <form className='subscribe-form'>
          <input className='input' placeholder='Email'></input>
          <button className='button'>Subscribe to news</button>
        </form>
      </div>
      <hr />
      <div className='footer-signature'>
        <Typography role='span' type='p' color='secondary'>
          © 2023 Positivus. All Rights Reserved.
        </Typography>
        <Typography role='span' type='p' color='secondary'>
          Privacy Policy
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
