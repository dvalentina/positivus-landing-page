import './Typography.styles.scss';

export interface ITypography {
  children?: React.ReactNode;
  role?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  type?: 'headline' | 'title' | 'subtitle' | 'label' | 'body';
  color?: 'primary' | 'secondary' | 'accent';
}

function Typography({
  children,
  role = 'p',
  type = 'body',
  color = 'primary',
}: ITypography) {
  const className = `typography typography__${type} typography__${type}--desktop typography--${color}`;
  switch (role) {
    case 'h1':
      return <h1 className={className}>{children}</h1>;
    case 'h2':
      return <h2 className={className}>{children}</h2>;
    case 'h3':
      return <h3 className={className}>{children}</h3>;
    case 'h4':
      return <h4 className={className}>{children}</h4>;
    case 'p':
      return <p className={className}>{children}</p>;
    case 'span':
      return <span className={className}>{children}</span>;
  }
}

export default Typography;
