import React, { useEffect, useState } from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import Input from '../Input';
import Loader from '../Loader';
import MessageDialog from '../MessageDialog';
import { useCreteCounterBodyStyles } from './styles';
import PropTypes from 'prop-types';

const CreateCounterBody = ({ ...props }) => {
  const { onChange, onExamplesOpen, value, createStatus } = props;
  const classes = useCreteCounterBodyStyles();
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  useEffect(() => {
    if (createStatus === 'errorCreating') setOpenErrorDialog(true);
  }, [createStatus]);

  return (
    <Box className={classes.container}>
      <MessageDialog
        open={openErrorDialog}
        onClose={() => setOpenErrorDialog(false)}
        title="Couldn't create counter"
        subtitle="The internet connection appears to be offline"
      />
      <Typography className={classes.title}>Name</Typography>
      <Input value={value} onChange={(event) => onChange(event)} />
      <Typography className={classes.subtitle}>
        Give it a name. Creative block? See&nbsp;
        <Link
          underline="always"
          className={classes.link}
          onClick={() => onExamplesOpen()}
          data-cy="examplesLink"
        >
          examples.
        </Link>
      </Typography>
      {createStatus === 'creating' && <Loader />}
    </Box>
  );
};

CreateCounterBody.propTypes = {
  onChange: PropTypes.func,
  onExamplesOpen: PropTypes.func,
  value: PropTypes.string,
  createStatus: PropTypes.string,
};

export default CreateCounterBody;
