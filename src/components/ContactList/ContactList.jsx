import ContactItem from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={() => onDeleteContact(contact.id)}
      />
    ))}
  </ul>
);

export default ContactList;