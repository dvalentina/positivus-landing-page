import { ourWorkingProcess } from '../../../constants';
import Accordion from '../../Accordion/Accordion';
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
      <div className='process-title'>
        <Typography role='h2' type='h2' color='primary' highlight='accent'>
          Our Working Process
        </Typography>
        <Typography className='process-title__subtitle'>
          Step-by-Step Guide to Achieving Your Business Goals
        </Typography>
      </div>
      <Accordion>{ourWorkingProcessComponents}</Accordion>
    </section>
  );
}

export default OurWorkingProcess;
