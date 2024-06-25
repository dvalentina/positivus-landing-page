import { ButtonHTMLAttributes } from 'react';
import './Button.styles.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: (event: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

function Button({ label, onClick, variant = 'primary', ...rest }: IButton) {
  return (
    <button className={`button button--${variant}`} onClick={onClick} {...rest}>
      <span className='button__label'>{label}</span>
    </button>
  );
}

export default Button;
