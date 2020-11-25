import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import PaperNote from '../Icon/PaperNote';
import { useTooltipContentStyles } from './styles';
import PropTypes from 'prop-types';

const TooltipContent = ({ ...props }) => {
  const { count, onShare, onClose } = props;
  const classes = useTooltipContentStyles();

  const handleCopy = () => {
    onShare();
    onClose();
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        paddingBottom="18px"
        width="max-content"
      >
        <div>
          <Typography className={classes.title}>
            Share {count} counter{count > 1 && 's'}
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleCopy}
            data-cy="copyButton"
          >
            Copy
          </Button>
        </div>
        <div>
          <PaperNote />
        </div>
      </Box>
    </React.Fragment>
  );
};

TooltipContent.propTypes = {
  count: PropTypes.number,
  onShare: PropTypes.func,
  onClose: PropTypes.func,
};

export default TooltipContent;
