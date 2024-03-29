import { Route, Routes } from 'react-router-dom';
import c from './App.module.css';
import { Suspense, lazy, useEffect } from 'react';
import Loader from '../Loader/Loader';
import AppBar from '../AppBar/AppBar';
import { refreshUser } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const SignUp = lazy(() => import('../../pages/SignUp/SignUp'));
const SignIn = lazy(() => import('../../pages/SignIn/SignIn'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div className={c.container}>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<SignIn />} redirectTo="/contacts" />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<SignUp />} redirectTo="/contacts" />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    )
  );
};

export default App;
