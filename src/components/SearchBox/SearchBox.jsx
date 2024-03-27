import { useId } from 'react';
import c from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const elementId = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={c.container}>
      <label className={c.label} htmlFor={elementId}>
        Find contacts by name
      </label>
      <input
        value={value}
        onChange={handleChange}
        className={c.searchInput}
        type="text"
        id={elementId}
        placeholder="Name"
      />
    </div>
  );
};

export default SearchBox;
