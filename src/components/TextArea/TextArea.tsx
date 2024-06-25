import './TextArea.styles.scss';

interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function TextArea({ label, id, ...rest }: ITextArea) {
  return (
    <div className='textarea'>
      <label className='textarea__label' htmlFor={id}>
        {label}
      </label>
      <textarea className='textarea__textarea' id={id} {...rest} />
    </div>
  );
}

export default TextArea;
