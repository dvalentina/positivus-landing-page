import Card from '../Card/Card';
import Typography from '../Typography/Typography';
import './TeamCard.styles.scss';
import LinkedInIcon from '../../../public/assets/linkedin.svg?react';
import Avatar from '../Avatar/Avatar';
import Divider from '../Divider/Divider';

interface ITeamCard {
  avatarSrc: string;
  name: string;
  jobTitle: string;
  linkedInURL: string;
  experience: string;
}

function TeamCard({
  avatarSrc,
  name,
  jobTitle,
  linkedInURL,
  experience,
}: ITeamCard) {
  return (
    <Card variant='white' className='team-card'>
      <div className='team-card-upper'>
        <Avatar src={`/assets/avatars/${avatarSrc}`} />
        <div>
          <Typography role='p' type='h4'>
            {name}
          </Typography>
          <Typography className='team-card__job-title'>{jobTitle}</Typography>
        </div>
        <a href={linkedInURL}>
          <LinkedInIcon className='team-card-icon team-card__team-card-icon' />
        </a>
      </div>
      <Divider color='black' />
      <Typography>{experience}</Typography>
    </Card>
  );
}

export default TeamCard;
