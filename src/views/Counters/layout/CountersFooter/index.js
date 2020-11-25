import React, { useEffect, useState } from 'react';
import { Box, Divider, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
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
import PropTypes from 'prop-types';

const CountersFooter = ({ ...props }) => {
  const { onDialogOpen, selectedCounters } = props;
  const dispatch = useDispatch();
  const { delStatus } = useSelector((state) => state.counterReducer);
  const [openDelete, setOpenDelete] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const classes = useStyles();

  const handleDelete = () => {
    selectedCounters.forEach((element) => {
      dispatch(deleteCounter(element.id));
    });
    setOpenDelete(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedCounters));
    setOpenAlert(true);
  };

  useEffect(() => {
    if (selectedCounters.length > 0 && selectedCounters.length != 1)
      setErrorTitle(`${selectedCounters.length} counters`);
    if (selectedCounters.length > 0 && selectedCounters.length === 1)
      setErrorTitle(selectedCounters[0].title);
    if (delStatus === 'errorDeleting') setOpenErrorDialog(true);
    if (delStatus !== 'errorDeleting') setOpenErrorDialog(false);
    if (delStatus === 'succeded' && selectedCounters.length)
      selectedCounters.forEach((element) => dispatch(deselectCounter(element)));
  }, [delStatus, selectedCounters]);

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
      <MessageDialog
        open={openErrorDialog}
        onClose={() => setOpenErrorDialog(false)}
        type="errorOnCreation"
        title={`Couldn't delete "${errorTitle}"`}
        subtitle={'The internet connection appears to be offline.'}
        onRetry={handleDelete}
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
                      data-cy="trashButton"
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
                        data-cy="shareButton"
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
                  data-cy="addButton"
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

CountersFooter.propTypes = {
  onDialogOpen: PropTypes.func,
  selectedCounters: PropTypes.array,
};

export default CountersFooter;
