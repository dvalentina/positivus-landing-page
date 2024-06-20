import './Button.styles.scss';

interface IButton {
  label: string;
  onClick?: (event: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

function Button({ label, onClick, variant = 'primary' }: IButton) {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      <span className='button__label'>{label}</span>
    </button>
  );
}

export default Button;
