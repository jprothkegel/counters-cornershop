import React from 'react';
import { Dialog, Divider, useMediaQuery } from '@material-ui/core';
import Transition from '../Transition';
import ExamplesDialogHeader from './ExamplesDialogHeader';
import ExamplesDialogBody from './ExamplesDialogBody';
import { useExamplesDialogStyles } from './styles';
import PropTypes from 'prop-types';

const ExamplesDialog = ({ ...props }) => {
  const { open, onClose, onClick } = props;
  const fullScreen = useMediaQuery('(max-width:600px)');
  const classes = useExamplesDialogStyles({ fullScreen });
  return (
    <Dialog
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
      open={open}
      className={classes.dialog}
    >
      <ExamplesDialogHeader onClose={() => onClose()} />
      <Divider />
      <ExamplesDialogBody
        onClick={(event) => onClick(event)}
        onClose={() => onClose()}
      />
    </Dialog>
  );
};

ExamplesDialog.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default ExamplesDialog;
