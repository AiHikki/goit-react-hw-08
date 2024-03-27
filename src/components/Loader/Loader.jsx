import { ThreeDots } from 'react-loader-spinner';
import c from './Loader.module.css';

const Loader = () => {
  return (
    <div className={c.loader}>
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="black"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
