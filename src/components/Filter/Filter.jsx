import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      onChange={e => dispatch(addFilter(e.currentTarget.value))}
      type="text"
    />
  );
};
