import Card from '../Card/Card';
import { useAccordionContext } from './Accordion';
import './Accordion.styles.scss';

function AccordionItem({
  id,
  children,
}: {
  id: string;
  children?: React.ReactNode;
}) {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = id === openItemId;

  return (
    <li onClick={() => toggleItem(id)}>
      <Card variant={isOpen ? 'green' : 'grey'} className='accordion-item'>
        {children}
      </Card>
    </li>
  );
}

export default AccordionItem;
