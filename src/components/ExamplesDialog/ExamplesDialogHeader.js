import React from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { useExamplesDialogHeaderStyles } from './styles';

const ExamplesDialogHeader = ({ ...props }) => {
  const { onClose } = props;
  const classes = useExamplesDialogHeaderStyles();
  return (
    <Box display="flex" alignItems="center" padding="10px 4px">
      <IconButton onClick={() => onClose()}>
        <CancelIcon className={classes.cancelIcon} />
      </IconButton>
      <Typography className={classes.title}>Examples</Typography>
    </Box>
  );
};

export default ExamplesDialogHeader;
