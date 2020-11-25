import React from 'react';
import { Typography, Box, Chip } from '@material-ui/core';
import { useExampleChipsStyles } from './styles';
import PropTypes from 'prop-types';

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
            data-cy="examplesChip"
          />
        ))}
      </Box>
    </React.Fragment>
  );
};

ExamplesChips.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default ExamplesChips;
