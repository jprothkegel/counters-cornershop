import React, { useState } from 'react';
import { Dialog, Divider, useMediaQuery } from '@material-ui/core';
import CreateCounterHeader from './CreateCounterHeader';
import CreateCounterBody from './CreateCounterBody';
import Transition from '../Transition';
import { useCreateCounterStyles } from './styles';
import ExamplesDialog from '../ExamplesDialog';

const CreateCounterDialog = ({ ...props }) => {
  const { open, onClose } = props;
  const fullScreen = useMediaQuery('(max-width:600px)');
  const classes = useCreateCounterStyles({ fullScreen });
  const [counterValue, setCounterValue] = useState('');
  const [examplesOpen, setExamplesOpen] = useState(false);

  return (
    <React.Fragment>
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
        <CreateCounterBody
          onChange={(event) => setCounterValue(event)}
          onExamplesOpen={() => setExamplesOpen(true)}
          value={counterValue}
        />
      </Dialog>
      <ExamplesDialog
        open={examplesOpen}
        onClose={() => setExamplesOpen(false)}
        onClick={(event) => setCounterValue(event)}
      />
    </React.Fragment>
  );
};

export default CreateCounterDialog;
