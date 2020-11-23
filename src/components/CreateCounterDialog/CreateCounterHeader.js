import React, { useEffect } from 'react';
import { Box, IconButton, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import { useCreateCounterHeaderStyles } from './styles';
import { createCounter } from '../../redux/actions/counterActions';

const CreateCounterHeader = ({ ...props }) => {
  const { onClose, value, createStatus } = props;
  const dispatch = useDispatch();
  const classes = useCreateCounterHeaderStyles();

  const handleCreation = (value) => {
    dispatch(createCounter(value));
  };

  useEffect(() => {
    if (createStatus === 'succeded') onClose();
  }, [createStatus]);

  return (
    <Box display="flex" alignItems="center" padding="10px 4px">
      <IconButton onClick={() => onClose()}>
        <CancelIcon className={classes.cancelIcon} />
      </IconButton>
      <Typography className={classes.title}>Create counter</Typography>
      <Button
        disabled={value === ''}
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => handleCreation(value)}
      >
        Save
      </Button>
    </Box>
  );
};

export default CreateCounterHeader;
