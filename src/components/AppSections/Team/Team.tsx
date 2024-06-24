import { team } from '../../../constants';
import Button from '../../Button/Button';
import SectionHeading from '../../SectionHeading/SectionHeading';
import TeamCard from '../../TeamCard/TeamCard';
import './Team.styles.scss';

function Team({ className = '' }: { className?: string }) {
  const teamComponents = team.map((item) => (
    <TeamCard
      avatarSrc={item.avatarSrc}
      name={item.name}
      jobTitle={item.jobTitle}
      linkedInURL={item.linkedInURL}
      experience={item.experience}
    />
  ));

  return (
    <section id='team' className={`team ${className}`}>
      <SectionHeading>
        <SectionHeading.Title>Team</SectionHeading.Title>
        <SectionHeading.Subtitle width='473px'>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </SectionHeading.Subtitle>
      </SectionHeading>
      <div className='team-cards team__team-cards'>{teamComponents}</div>
      <Button label='See all team' />
    </section>
  );
}

export default Team;
