import React from 'react';
import { Box } from '@material-ui/core';
import SearchInput from '../../../../components/SearchInput';
import PropTypes from 'prop-types';

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

CountersHeader.propTypes = {
  searchDisabled: PropTypes.bool,
  counters: PropTypes.array,
  onSearch: PropTypes.func,
  onFocus: PropTypes.func,
};

export default CountersHeader;
