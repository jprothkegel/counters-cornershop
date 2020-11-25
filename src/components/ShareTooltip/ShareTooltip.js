import React from 'react';
import { Tooltip, ClickAwayListener } from '@material-ui/core';
import TooltipContent from './TooltipContent';
import PropTypes from 'prop-types';

const ShareTooltip = ({ ...props }) => {
  const { children, onClose, open, count, onShare } = props;
  return (
    <ClickAwayListener onClickAway={onClose}>
      <div>
        <Tooltip
          PopperProps={{ disablePortal: true }}
          onClose={onClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          arrow
          interactive
          title={
            <TooltipContent count={count} onClose={onClose} onShare={onShare} />
          }
        >
          {children}
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

ShareTooltip.propTypes = {
  children: PropTypes.object,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  count: PropTypes.number,
  onShare: PropTypes.func,
};

export default ShareTooltip;
