import React from 'react';
import { Dialog, Grid, Typography } from '@material-ui/core';
import Transition from '../Transition';
import DialogType from './DialogType';
import { useMessageDialogStyles } from './styles';

const MessageDialog = ({ ...props }) => {
  const { open, onClose, title, subtitle, type, deleteCounter, retry } = props;
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
            onRetry={() => retry()}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default MessageDialog;
