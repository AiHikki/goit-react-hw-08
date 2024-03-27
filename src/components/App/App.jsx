import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import c from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={c.container}>
      <h1>Phonebook</h1>
      <div className={c.formContainer}>
        <ContactForm />
        <SearchBox />
      </div>
      {loading && !error && <Loader />}
      {error && <b>{error}</b>}
      <ContactList />
    </div>
  );
};

export default App;
