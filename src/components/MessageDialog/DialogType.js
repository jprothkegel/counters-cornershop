import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useDialogTypeStyles } from './styles';

const DialogType = ({ ...props }) => {
  const { type, onClose, onDelete, onRetry } = props;
  const classes = useDialogTypeStyles();
  switch (type) {
    case 'confirmation':
      return (
        <React.Fragment>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onClose()}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.deleteButton}
              onClick={() => onDelete()}
            >
              Delete
            </Button>
          </Grid>
        </React.Fragment>
      );
    case 'errorOnCreation':
      return (
        <React.Fragment>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onRetry()}
            >
              Retry
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => onClose()}>
              Dismiss
            </Button>
          </Grid>
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <Grid item>
            <Button
              variant="contained"
              className={classes.secondaryButton}
              onClick={() => onClose()}
            >
              Dismiss
            </Button>
          </Grid>
        </React.Fragment>
      );
  }
};

export default DialogType;
