import React, { useState } from 'react';
import { Box, Divider, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import TrashIcon from '../../../../components/Icon/TrashIcon';
import ShareIcon from '../../../../components/Icon/ShareIcon';
import MessageDialog from '../../../../components/MessageDialog';
import ShareTooltip from '../../../../components/ShareTooltip';
import Alert from '../../../../components/Alert';
import { deleteCounter } from '../../../../redux/actions/counterActions';
import { deselectCounter } from '../../../../redux/slices/selectedCounterSlice';
import { confirmationTextFormatter } from '../../../../helpers/CounterHelper';
import useStyles from './styles';

const CountersFooter = ({ ...props }) => {
  const { onDialogOpen, selectedCounters } = props;
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const classes = useStyles();

  const handleDelete = () => {
    selectedCounters.forEach((element) => {
      dispatch(deleteCounter(element.id));
      dispatch(deselectCounter(element));
    });
    setOpenDelete(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedCounters));
    setOpenAlert(true);
  };

  return (
    <React.Fragment>
      <Alert
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        severity="success"
        message="Copied to Clipboard!"
      />
      <MessageDialog
        open={openDelete}
        type="confirmation"
        onClose={() => setOpenDelete(false)}
        deleteCounter={handleDelete}
        title={confirmationTextFormatter(selectedCounters)}
        subtitle="This cannot be undone."
      />
      <Box position="fixed" top="auto" bottom={0} width="100%">
        <Divider variant="middle" />
        <Box width="100%" padding="16px" display="flex" justifyContent="center">
          <Box width="100%" maxWidth="600px">
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" flexDirection="row">
                {selectedCounters && selectedCounters.length !== 0 && (
                  <React.Fragment>
                    <Button
                      className={classes.button}
                      onClick={() => setOpenDelete(true)}
                    >
                      <TrashIcon />
                    </Button>
                    <ShareTooltip
                      open={openShare}
                      onClose={() => setOpenShare(false)}
                      onShare={handleShare}
                      count={selectedCounters.length}
                    >
                      <Button
                        className={classes.button}
                        onClick={() => setOpenShare(true)}
                      >
                        <ShareIcon />
                      </Button>
                    </ShareTooltip>
                  </React.Fragment>
                )}
              </Box>
              <Box>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={() => onDialogOpen()}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CountersFooter;
