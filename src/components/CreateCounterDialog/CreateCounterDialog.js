import React, { useState } from 'react';
import { Dialog, Divider, useMediaQuery } from '@material-ui/core';
import CreateCounterHeader from './CreateCounterHeader';
import CreateCounterBody from './CreateCounterBody';
import Transition from '../Transition';
import { useCreateCounterStyles } from './styles';

const CreateCounterDialog = ({ ...props }) => {
  const { open, onClose } = props;
  const fullScreen = useMediaQuery('(max-width:600px)');
  const classes = useCreateCounterStyles({ fullScreen });
  const [counterValue, setCounterValue] = useState('');

  const handleInput = (event) => {
    setCounterValue(event);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
      className={classes.dialog}
      open={open}
    >
      <CreateCounterHeader value={counterValue} onClose={() => onClose()} />
      <Divider />
      <CreateCounterBody onChange={handleInput} />
    </Dialog>
  );
};

export default CreateCounterDialog;
