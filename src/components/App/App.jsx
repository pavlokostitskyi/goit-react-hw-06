import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, selectContacts } from '../../components/redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../components/redux/filtersSlice';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <SearchBox value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={getVisibleContacts()} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
