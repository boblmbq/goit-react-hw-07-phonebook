import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getAllContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
