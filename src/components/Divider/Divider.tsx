import './Divider.styles.scss';

interface IDivider {
  color?: 'white' | 'black';
  orientation?: 'vertical' | 'horizontal';
}

function Divider({ color = 'black', orientation = 'horizontal' }: IDivider) {
  return <hr className={`divider divider--${color} divider--${orientation}`} />;
}

export default Divider;
