import c from './AuthNav.module.css';
import CustomLink from '../CustomNavLink/CustomNavLink';

const AuthNav = () => {
  return (
    <div className={c.nav}>
      <CustomLink to="/register">Sign Up</CustomLink>
      <CustomLink to="/login">Sign In</CustomLink>
    </div>
  );
};

export default AuthNav;
