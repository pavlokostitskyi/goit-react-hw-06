import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactItem.module.css';

const ContactItem = ({ contactId, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.contact}>
      <ul className={styles.contactItem}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button className={styles.contactItemBtn} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactItem;
