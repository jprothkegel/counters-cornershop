import React from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { useExamplesDialogHeaderStyles } from './styles';
import PropTypes from 'prop-types';

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

ExamplesDialogHeader.propTypes = {
  onClose: PropTypes.func,
};

export default ExamplesDialogHeader;
