import React from 'react';
import { Box } from '@material-ui/core';
import SearchInput from '../../../../components/SearchInput';

const CountersHeader = () => {
  return (
    <Box display="flex" justifyContent="center" padding="16px">
      <SearchInput />
    </Box>
  );
};

export default CountersHeader;
