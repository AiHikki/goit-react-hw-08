import c from './Home.module.css';

const Home = () => {
  return (
    <div className={c.container}>
      <p className={c.greeting}>Welcome to Home Page</p>
      <p className={c.text}>
        Organize your contacts like never before. Log in to use all the features.
      </p>
    </div>
  );
};

export default Home;
