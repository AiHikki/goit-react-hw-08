import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import c from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={c.list}>
      {contacts.map(contact => (
        <li className={c.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
