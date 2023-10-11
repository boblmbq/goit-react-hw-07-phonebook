import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';

const LABEL_IDS = {
  nameId: nanoid(),
  numberId: nanoid(),
};

const { nameId, numberId } = LABEL_IDS;

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;

    if (contact.some(e => e.name === name)) {
      alert('this contact is allready exist, please add a new one');
      return;
    }

    const number = e.target.elements.number.value;
    dispatch(addContact(name, number));
    e.target.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        className={css.input}
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        id={numberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
