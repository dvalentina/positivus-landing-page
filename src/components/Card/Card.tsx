import './Card.styles.scss';

interface ICard {
  className?: string;
  children?: React.ReactNode;
  variant?: 'grey' | 'green' | 'dark';
}

function Card({ className = '', children, variant = 'grey' }: ICard) {
  return (
    <div className={`card ${className}`}>
      <div className={`card__moving-part card__moving-part--${variant}`}>
        {children}
      </div>
    </div>
  );
}

export default Card;
