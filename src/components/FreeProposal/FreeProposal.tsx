import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import './FreeProposal.styles.scss';
import FreeProposalIllustration from '../../../public/assets/free-proposal-illustration.svg?react';
import { useEffect, useRef } from 'react';
import { floatIt, parallaxIt, spinIt } from '../../animations';

function FreeProposal({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef?.current;

    if (container) {
      container.addEventListener('mousemove', (e) => {
        parallaxIt(
          e,
          container,
          '.free-proposal-illustration__star--small',
          -60
        );
        parallaxIt(
          e,
          container,
          '.free-proposal-illustration__star--medium',
          -40
        );
        parallaxIt(e, container, '.free-proposal-illustration__face', -20);
        parallaxIt(
          e,
          container,
          '.free-proposal-illustration__star--large',
          -7
        );
        parallaxIt(e, container, '.free-proposal-illustration__spring', -10);
      });
    }

    floatIt({
      targetClassName: '.free-proposal-illustration__face',
      yPercent: 10,
    });
    spinIt({
      targetClassName: '.free-proposal-illustration__star--large',
      duration: 60,
      direction: -1,
    });
    spinIt({
      targetClassName: '.free-proposal-illustration__star--medium',
      duration: 20,
      direction: 1,
    });
    spinIt({
      targetClassName: '.free-proposal-illustration__star--small',
      duration: 18,
      direction: -1,
    });
  }, [containerRef]);

  return (
    <section
      id='free-proposal'
      className={`free-proposal ${className}`}
      ref={containerRef}
    >
      <div className='free-proposal-text'>
        <Typography role='h3' type='h3' color='primary'>
          Let’s make things happen
        </Typography>
        <Typography>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </Typography>
        <Button label='Get your free proposal' />
      </div>
      <FreeProposalIllustration className='free-proposal__illustration' />
    </section>
  );
}

export default FreeProposal;
