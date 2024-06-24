import { ourWorkingProcess } from '../../../constants';
import Accordion from '../../Accordion/Accordion';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Typography from '../../Typography/Typography';
import './OurWorkingProcess.styles.scss';

function OurWorkingProcess({ className = '' }: { className: string }) {
  const ourWorkingProcessComponents = ourWorkingProcess.map((item, index) => (
    <Accordion.Item id={`${index + 1}`}>
      <Accordion.Title id={`${index + 1}`}>
        <div className='process-accordion-title'>
          <h4 className='process-accordion-title__number'>{`0${index + 1}`}</h4>
          <h4 className='process-accordion-title__text'>{item.title}</h4>
        </div>
      </Accordion.Title>
      <Accordion.Content id={`${index + 1}`}>
        <Typography>{item.content}</Typography>
      </Accordion.Content>
    </Accordion.Item>
  ));

  return (
    <section id='our-working-process' className={`process ${className}`}>
      <SectionHeading>
        <SectionHeading.Title>Our Working Process</SectionHeading.Title>
        <SectionHeading.Subtitle width='292px'>
          Step-by-Step Guide to Achieving Your Business Goals
        </SectionHeading.Subtitle>
      </SectionHeading>
      <Accordion>{ourWorkingProcessComponents}</Accordion>
    </section>
  );
}

export default OurWorkingProcess;
