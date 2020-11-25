import React, { useState } from 'react';
import { Dialog, Divider, useMediaQuery } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CreateCounterHeader from './CreateCounterHeader';
import CreateCounterBody from './CreateCounterBody';
import Transition from '../Transition';
import { useCreateCounterStyles } from './styles';
import ExamplesDialog from '../ExamplesDialog';
import PropTypes from 'prop-types';

const CreateCounterDialog = ({ ...props }) => {
  const { open, onClose } = props;
  const fullScreen = useMediaQuery('(max-width:600px)');
  const classes = useCreateCounterStyles({ fullScreen });
  const [counterValue, setCounterValue] = useState('');
  const [examplesOpen, setExamplesOpen] = useState(false);
  const { createStatus } = useSelector((state) => state.counterReducer);

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
        <CreateCounterHeader
          value={counterValue}
          onClose={() => onClose()}
          createStatus={createStatus}
        />
        <Divider />
        <CreateCounterBody
          onChange={(event) => setCounterValue(event)}
          onExamplesOpen={() => setExamplesOpen(true)}
          value={counterValue}
          createStatus={createStatus}
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

CreateCounterDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default CreateCounterDialog;
