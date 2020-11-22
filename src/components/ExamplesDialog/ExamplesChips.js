import React from 'react';
import { Typography, Box, Chip } from '@material-ui/core';
import { useExampleChipsStyles } from './styles';

const ExamplesChips = ({ ...props }) => {
  const { data, title, onClick, onClose } = props;
  const classes = useExampleChipsStyles();

  const handleChips = (example) => {
    onClick(example);
    onClose();
  };

  return (
    <React.Fragment>
      <Typography className={classes.title}> {title} </Typography>
      <Box className={classes.chipContainer}>
        {data.map((example) => (
          <Chip
            className={classes.chips}
            key={example}
            label={example}
            onClick={() => handleChips(example)}
          />
        ))}
      </Box>
    </React.Fragment>
  );
};

export default ExamplesChips;
