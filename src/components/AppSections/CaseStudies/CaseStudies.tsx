import { caseStudies } from '../../../constants';
import Link from '../../Link/Link';
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
        {index !== caseStudies.length - 1 ? <hr /> : null}
      </>
    );
  });

  return (
    <section id='case-studies' className={`case-studies ${className}`}>
      <div className='case-studies-title'>
        <Typography role='h2' type='h2' color='primary' highlight='accent'>
          Case Studies
        </Typography>
        <Typography className='case-studies-title__subtitle'>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </Typography>
      </div>
      <div className='case-studies-banner'>{caseStudiesComponents}</div>
    </section>
  );
}

export default CaseStudies;
