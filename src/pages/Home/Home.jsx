import c from './Home.module.css';
import 'animate.css';
import clsx from 'clsx';

const Home = () => {
  return (
    <div className={clsx(c.container, 'animate__animated', 'animate__slideInLeft')}>
      <p className={c.greeting}>Welcome to Home Page</p>
      <p className={c.text}>
        Organize your contacts like never before. Log in to use all the features.
      </p>
    </div>
  );
};

export default Home;
