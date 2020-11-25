import React from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './styles';
import PropTypes from 'prop-types';

const Input = ({ ...props }) => {
  const { onChange, value } = props;
  const classes = useStyles();
  return (
    <TextField
      data-cy="createInput"
      fullWidth
      placeholder="Cups of Coffee"
      variant="outlined"
      className={classes.textField}
      onChange={(event) => onChange(event.target.value)}
      value={value}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
