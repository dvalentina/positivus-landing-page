import { useAccordionContext } from './Accordion';
import './Accordion.styles.scss';

function AccordionContent({
  children,
  id,
}: {
  children?: React.ReactNode;
  id: string;
}) {
  const { openItemId } = useAccordionContext();

  const isOpen = id === openItemId;

  return (
    <div
      className={`accordion-content ${isOpen ? 'accordion-content--open' : ''}`}
    >
      <div className='accordion-content-overflow-helper'>
        <div className='accordion-content-padding-wrapper'>
          <hr className='accordion__hr' />
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionContent;
