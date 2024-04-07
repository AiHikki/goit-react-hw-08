import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import c from './Layout.module.css';
import { selectLoading } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const Layout = ({ children }) => {
  const loading = useSelector(selectLoading);

  return (
    <div className={c.container}>
      <AppBar />
      <main>{children}</main>
      <Toaster position="top-right" />
      {loading && <Loader />}
    </div>
  );
};

export default Layout;
