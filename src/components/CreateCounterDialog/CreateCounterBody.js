import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import Input from '../Input';
import Loader from '../Loader';
import { useCreteCounterBodyStyles } from './styles';

const CreateCounterBody = ({ ...props }) => {
  const { onChange, onExamplesOpen, value, createStatus } = props;
  const classes = useCreteCounterBodyStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Name</Typography>
      <Input value={value} onChange={(event) => onChange(event)} />
      <Typography className={classes.subtitle}>
        Give it a name. Creative block? See&nbsp;
        <Link
          underline="always"
          className={classes.link}
          onClick={() => onExamplesOpen()}
        >
          examples.
        </Link>
      </Typography>
      {createStatus === 'creating' && <Loader />}
    </Box>
  );
};

export default CreateCounterBody;
