import React from 'react';
import { Tooltip, ClickAwayListener } from '@material-ui/core';
import TooltipContent from './TooltipContent';

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

export default ShareTooltip;
