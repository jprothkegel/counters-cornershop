import React from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './styles';

const Input = ({ ...props }) => {
  const { onChange, value } = props;
  const classes = useStyles();
  return (
    <TextField
      fullWidth
      placeholder="Cups of Coffee"
      variant="outlined"
      className={classes.textField}
      onChange={(event) => onChange(event.target.value)}
      value={value}
    />
  );
};

export default Input;
