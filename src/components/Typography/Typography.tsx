import './Typography.styles.scss';

export interface ITypography {
  children?: React.ReactNode;
  role?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  color?: 'primary' | 'secondary' | 'accent';
  highlight?: 'accent' | 'white';
  className?: string;
}

function Typography({
  children,
  role = 'p',
  type = 'p',
  color = 'primary',
  highlight,
  className,
}: ITypography) {
  const textClassName = `typography typography__${type} typography__${type}--desktop typography--${color} ${
    highlight ? `typography--${highlight}-highlight` : ''
  }`;
  switch (role) {
    case 'h1':
      return (
        <h1 className={className || ''}>
          <span className={textClassName}>{children}</span>
        </h1>
      );
    case 'h2':
      return (
        <h2 className={className || ''}>
          <span className={textClassName}>{children}</span>
        </h2>
      );
    case 'h3':
      return (
        <h3 className={className || ''}>
          <span className={textClassName}>{children}</span>
        </h3>
      );
    case 'h4':
      return (
        <h4 className={className || ''}>
          <span className={textClassName}>{children}</span>
        </h4>
      );
    case 'p':
      return (
        <p className={className || ''}>
          <span className={textClassName}>{children}</span>
        </p>
      );
    case 'span':
      return (
        <span className={textClassName + className || ''}>{children}</span>
      );
  }
}

export default Typography;
