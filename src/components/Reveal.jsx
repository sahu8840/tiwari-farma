import { useInView } from '../hooks/useInView';

const Reveal = ({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  direction = 'up',
}) => {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
