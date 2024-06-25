import './Input.styles.scss';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, id, ...rest }: IInput) {
  return (
    <div className='input'>
      <label className='input__label' htmlFor={id}>
        {label}
      </label>
      <input className='input__input' id={id} {...rest} />
    </div>
  );
}

export default Input;
