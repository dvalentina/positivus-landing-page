import { navigationLinks } from '../../constants';
import Button from '../Button/Button';
import PositivusLogo from '../PositivusLogo/PositivusLogo';
import Typography from '../Typography/Typography';
import './Header.styles.scss';

function Header({ className }: { className?: string }) {
  const navigationLinksComponents = navigationLinks.map((item) => (
    <a href={item.link} className='header-link'>
      <Typography role='span' type='p' color='primary'>
        {item.name}
      </Typography>
    </a>
  ));

  return (
    <header className={`header ${className || ''}`}>
      <PositivusLogo className='header-logo' />
      <nav className='header-navigation header__header-navigation'>
        {navigationLinksComponents}
      </nav>
      <Button
        label='Request a quote'
        onClick={(event) => event.preventDefault()}
        variant='secondary'
      />
    </header>
  );
}

export default Header;
