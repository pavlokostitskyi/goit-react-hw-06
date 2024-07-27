import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete }) => (
  <div  className={styles.contact}>
  <ul className={styles.contactItem}>
    <li>{name}</li>
    <li>{number}</li>
    </ul>
    <button className={styles.contactItemBtn} onClick={onDelete}>Delete</button>
  </div>
);

export default ContactItem;