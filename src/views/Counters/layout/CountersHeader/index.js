import React from 'react';
import { Box } from '@material-ui/core';
import SearchInput from '../../../../components/SearchInput';

const CountersHeader = ({ ...props }) => {
  const { searchDisabled, counters, onSearch, onFocus } = props;
  return (
    <Box display="flex" justifyContent="center" padding="16px" width="100%">
      <SearchInput
        disabled={searchDisabled}
        onSearch={(event) => onSearch(event)}
        counters={counters}
        onFocus={(event) => onFocus(event)}
        onBlur={(event) => onFocus(event)}
      />
    </Box>
  );
};

export default CountersHeader;
