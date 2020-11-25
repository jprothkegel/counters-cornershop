import React, { useState, useEffect } from 'react';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getArrayFiltered } from '../../helpers/CounterHelper';
import useStyles from './styles';
import PropTypes from 'prop-types';

const SearchInput = ({ ...props }) => {
  const { disabled, onSearch, onFocus, counters } = props;
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    const response = getArrayFiltered({
      value: value,
      array: counters,
      key: 'title',
    });
    onSearch(response);
  };

  const handleCancel = () => {
    setSearchValue('');
    const response = getArrayFiltered({
      value: '',
      array: counters,
      key: 'title',
    });
    onSearch(response);
  };

  useEffect(() => {
    if (searchValue) {
      const response = getArrayFiltered({
        value: searchValue,
        array: counters,
        key: 'title',
      });
      onSearch(response);
    }
  }, [counters]);

  return (
    <React.Fragment>
      <TextField
        data-cy="searchInput"
        fullWidth
        placeholder="Search Counters"
        variant="outlined"
        onChange={handleSearch}
        className={classes.textfield}
        disabled={disabled}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
        value={searchValue}
        InputProps={{
          startAdornment: (
            <InputAdornment className={classes.adornment}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {!!searchValue && (
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleCancel}
          data-cy="searchCancel"
        >
          Cancel
        </Button>
      )}
    </React.Fragment>
  );
};

SearchInput.propTypes = {
  disabled: PropTypes.bool,
  onSearch: PropTypes.func,
  onFocus: PropTypes.func,
  counters: PropTypes.array,
};

export default SearchInput;
