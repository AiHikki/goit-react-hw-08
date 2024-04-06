import { RotatingLines, ThreeDots } from 'react-loader-spinner';
import c from './Loader.module.css';

const Loader = () => {
  return (
    <div className={c.backdrop}>
      <div className={c.loader}>
        {/* <ThreeDots
        visible={true}
        height="40"
        width="40"
        color="black"
        radius="9"
        ariaLabel="three-dots-loading"
      /> */}
        <RotatingLines
          visible={true}
          height="40"
          width="40"
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loader;
