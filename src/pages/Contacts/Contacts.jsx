import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import c from './Contacts.module.css';
import toast from 'react-hot-toast';

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() =>
        toast.error('Oops... Something went wrong', {
          id: 'error',
        })
      );
  }, [dispatch]);

  return (
    <div className={c.wrapper}>
      <div className={c.heading}>Contacts</div>
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

export default Contacts;