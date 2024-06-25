import './RadioButton.styles.scss';

interface IRadioButton extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function RadioButton({ label, id, ...rest }: IRadioButton) {
  return (
    <label className='radio-button' htmlFor={id}>
      <input className='radio-button__input' type='radio' id={id} {...rest} />
      {label}
    </label>
  );
}

export default RadioButton;
