import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './styles';

function InnerAlert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = ({ ...props }) => {
  const { open, onClose, severity, message } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
        <InnerAlert onClose={onClose} severity={severity}>
          {message}
        </InnerAlert>
      </Snackbar>
    </div>
  );
};

export default Alert;
