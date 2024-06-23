import './Accordion.styles.scss';
import PlusIcon from '../../../public/assets/plus-icon.svg?react';
import { useAccordionContext } from './Accordion';

function AccordionTitle({
  children,
  id,
}: {
  children?: React.ReactNode;
  id: string;
}) {
  const { openItemId } = useAccordionContext();
  const isOpen = id === openItemId;

  return (
    <div className='accordion-title'>
      {children}
      <PlusIcon
        className={`accordion-title__icon ${
          isOpen ? 'accordion-title__icon--open' : ''
        }`}
      />
    </div>
  );
}

export default AccordionTitle;
