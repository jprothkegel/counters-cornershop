import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { EXAMPLES } from '../../constants/examples';
import ExamplesChips from './ExamplesChips';
import { useExamplesDialogBodyStyles } from './styles';

const ExamplesDialogBody = ({ ...props }) => {
  const { onClick, onClose } = props;
  const classes = useExamplesDialogBodyStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>
        Select an example to add it to your counters.
      </Typography>
      {EXAMPLES.map((example) => (
        <ExamplesChips
          title={example.label}
          key={example.label}
          data={example.data}
          onClick={(event) => onClick(event)}
          onClose={() => onClose()}
        />
      ))}
    </Box>
  );
};

export default ExamplesDialogBody;
