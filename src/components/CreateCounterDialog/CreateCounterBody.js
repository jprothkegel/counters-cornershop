import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import Input from '../Input';
import { useCreteCounterBodyStyles } from './styles';

const CreateCounterBody = ({ ...props }) => {
  const { onChange } = props;
  const classes = useCreteCounterBodyStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Name</Typography>
      <Input onChange={(event) => onChange(event)} />
      <Typography className={classes.subtitle}>
        Give it a name. Creative block? See&nbsp;
        <Link underline="always" className={classes.link}>
          examples.
        </Link>
      </Typography>
    </Box>
  );
};

export default CreateCounterBody;
