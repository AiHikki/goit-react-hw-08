import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import c from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={c.contact}>
      <div className={c.info}>
        <div className={c.name}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={c.number}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete} className={c.delete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
