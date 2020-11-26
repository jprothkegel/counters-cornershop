import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './styles';
import PropTypes from 'prop-types';

function InnerAlert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = ({ ...props }) => {
  const { open, onClose, severity, message } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={onClose}
        data-cy="alert"
      >
        <InnerAlert onClose={onClose} severity={severity}>
          {message}
        </InnerAlert>
      </Snackbar>
    </div>
  );
};

Alert.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  severity: PropTypes.string,
  message: PropTypes.string,
};

export default Alert;
