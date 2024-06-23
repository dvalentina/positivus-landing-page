import './Link.styles.scss';
import ArrowIcon from '../../../public/assets/arrow-icon.svg?react';
import CircleArrowIcon from '../../../public/assets/circle-arrow-icon.svg?react';

interface ILink {
  label?: string;
  variant?:
    | 'simple-black'
    | 'simple-green'
    | 'simple-white'
    | 'black'
    | 'black-2'
    | 'green'
    | 'green-2'
    | 'white'
    | 'white-2';
  url?: string;
}

function Link({ label, variant = 'green', url }: ILink) {
  const isSimple = variant.includes('simple');

  return (
    <a className={`link link--${variant}`} href={url}>
      {isSimple ? (
        <ArrowIcon className={`link__icon link__icon--${variant}`} />
      ) : (
        <CircleArrowIcon className={`link__icon link__icon--${variant}`} />
      )}
      {label ? (
        <p className={`link__label link__label--${variant}`}>{label}</p>
      ) : null}
    </a>
  );
}

export default Link;
