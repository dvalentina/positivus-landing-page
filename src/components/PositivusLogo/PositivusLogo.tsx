import Logo from '../../../public/assets/positivus-logo.svg?react';
import './PositivusLogo.styles.scss';

function PositivusLogo({ className }: { className?: string }) {
  return (
    <a href='/'>
      <Logo className={`positivus-logo ${className || ''}`} />
    </a>
  );
}

export default PositivusLogo;
