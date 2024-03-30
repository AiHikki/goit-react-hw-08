import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import c from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={c.container}>
      <AppBar />
      {children}
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
