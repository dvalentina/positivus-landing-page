import './Accordion.styles.scss';
import { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

interface IAccordionContext {
  openItemId: string | null;
  toggleItem: (id: string) => void;
}

const AccordionContext = createContext<IAccordionContext>(
  {} as IAccordionContext
);

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      'Accordion-related comonents must be wrapped in <Accordion>.'
    );
  }

  return context;
}

function Accordion({ children }: { children?: React.ReactNode }) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className='accordion'>{children}</ul>
    </AccordionContext.Provider>
  );
}

export default Accordion;

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
