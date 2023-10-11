import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      onChange={e => dispatch(filter(e.currentTarget.value))}
      type="text"
    />
  );
};
