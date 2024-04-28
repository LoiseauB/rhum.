import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  asNavLink?: boolean;
  href?: string;
  isBig?: boolean;
  children: React.ReactNode;
};

const Button = ({ asNavLink, href, isBig, children }: Props) => {
  if (asNavLink) {
    return (
      <NavLink
        to={href ? href : '/'}
        className={classNames({ 'w-full': isBig }, 'btn btn-primary')}>
        {children}
      </NavLink>
    );
  }
  return (
    <button className={classNames({ 'w-full': isBig }, 'btn btn-primary')}>
      {children}
    </button>
  );
};

export default Button;
