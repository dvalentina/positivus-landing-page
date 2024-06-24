import { caseStudies } from '../../../constants';
import Divider from '../../Divider/Divider';
import Link from '../../Link/Link';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Typography from '../../Typography/Typography';
import './CaseStudies.styles.scss';

function CaseStudies({ className = '' }: { className?: string }) {
  const caseStudiesComponents = caseStudies.map((item, index) => {
    return (
      <>
        <div className='case-studies-case-study'>
          <Typography color='secondary'>{item.text}</Typography>
          <Link label='Learn more' variant='simple-green' />
        </div>
        {index !== caseStudies.length - 1 ? (
          <Divider color='white' orientation='vertical' />
        ) : null}
      </>
    );
  });

  return (
    <section id='case-studies' className={`case-studies ${className}`}>
      <SectionHeading>
        <SectionHeading.Title>Case Studies</SectionHeading.Title>
        <SectionHeading.Subtitle width='500px'>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </SectionHeading.Subtitle>
      </SectionHeading>
      <div className='case-studies-banner'>{caseStudiesComponents}</div>
    </section>
  );
}

export default CaseStudies;
