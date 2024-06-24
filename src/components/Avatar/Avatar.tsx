import './Avatar.styles.scss';

function Avatar({ src }: { src: string }) {
  return (
    <div className='avatar'>
      <div className='avatar-mask'>
        <div className='avatar-overlay' />
        <img src={src} alt='avatar' />
      </div>
    </div>
  );
}

export default Avatar;
