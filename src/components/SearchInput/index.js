import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const SearchInput = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  return (
    <React.Fragment>
      <TextField
        fullWidth
        placeholder="Search Counters"
        variant="outlined"
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {!!searchValue && (
        <Button variant="contained" className={classes.button}>
          Cancel
        </Button>
      )}
    </React.Fragment>
  );
};

export default SearchInput;
