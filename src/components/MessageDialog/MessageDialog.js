import React from 'react';
import { Dialog, Grid, Typography } from '@material-ui/core';
import Transition from '../Transition';
import DialogType from './DialogType';
import { useMessageDialogStyles } from './styles';
import PropTypes from 'prop-types';

const MessageDialog = ({ ...props }) => {
  const {
    open,
    onClose,
    title,
    subtitle,
    type,
    deleteCounter,
    onRetry,
  } = props;
  const classes = useMessageDialogStyles();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      className={classes.dialog}
      onClose={() => onClose()}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.container}
      >
        <Grid item>
          <Typography className={`${classes.text} ${classes.title}`}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={`${classes.text} ${classes.subtitle}`}>
            {subtitle}
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <DialogType
            type={type}
            onClose={() => onClose()}
            onDelete={() => deleteCounter()}
            onRetry={() => onRetry()}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

MessageDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.string,
  deleteCounter: PropTypes.func,
  onRetry: PropTypes.func,
};

export default MessageDialog;
