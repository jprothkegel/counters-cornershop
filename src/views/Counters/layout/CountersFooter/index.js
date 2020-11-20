import React from 'react';
import { Box, Divider, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const CountersFooter = () => {
  return (
    <Box position="fixed" top="auto" bottom={0} width="100%">
      <Divider variant="middle" />
      <Box display="flex" justifyContent="space-between" padding="16px">
        <Box></Box>
        <Box>
          <Button color="primary" variant="contained" size="small">
            <AddIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CountersFooter;
