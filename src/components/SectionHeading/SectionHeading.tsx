import Typography from '../Typography/Typography';
import './SectionHeading.styles.scss';

function SectionHeading({ children }: { children?: React.ReactNode }) {
  return <div className='section-heading'>{children}</div>;
}

function Title({ children }: { children?: React.ReactNode }) {
  return (
    <Typography role='h2' type='h2' color='primary' highlight='accent'>
      {children}
    </Typography>
  );
}

function Subtitle({
  children,
  width,
}: {
  children?: React.ReactNode;
  width?: string;
}) {
  return (
    <div style={{ width: width }}>
      <Typography>{children}</Typography>
    </div>
  );
}

export default SectionHeading;

SectionHeading.Title = Title;
SectionHeading.Subtitle = Subtitle;
