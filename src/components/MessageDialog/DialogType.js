import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useDialogTypeStyles } from './styles';
import PropTypes from 'prop-types';

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
              data-cy="deleteButton"
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
              data-cy="retryButton"
            >
              Retry
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => onClose()}
              color="secondary"
              data-cy="dismissButton"
            >
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
              color="primary"
              onClick={() => onClose()}
              data-cy="defaultDismissButton"
            >
              Dismiss
            </Button>
          </Grid>
        </React.Fragment>
      );
  }
};

DialogType.propTypes = {
  type: PropTypes.string,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  onRetry: PropTypes.func,
};

export default DialogType;
