import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => (
  <input
    type="text"
    className={styles.searchBox}
    placeholder="Search contacts"
    value={value}
    onChange={onChange}
  />
);

export default SearchBox;