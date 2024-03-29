import { NavLink } from 'react-router-dom';
import c from './CustomNavLink.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(c.link, isActive && c.isActive);
};

const CustomNavLink = ({ children, to }) => {
  return (
    <NavLink className={buildLinkClass} to={to}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
