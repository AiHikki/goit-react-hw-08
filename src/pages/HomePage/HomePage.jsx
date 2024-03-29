import c from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={c.container}>
      <p className={c.greeting}>Welcome to Home Page</p>
      <p className={c.text}>
        Organize your contacts like never before. Log in to use all the features.
      </p>
    </div>
  );
};

export default HomePage;
