import { makeStyles } from '@material-ui/core/styles';

export const useExampleChipsStyles = makeStyles(() => ({
  chips: {
    margin: 8,
    flex: '0 0 auto',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    background: '#ECECEC',
    borderRadius: 99,
    border: '1px solid #DCDCDF',
    fontSize: 17,
    fontWeight: 500,
    height: 40,
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  title: {
    fontSize: 17,
    fontWeight: 500,
  },
}));

export const useExamplesDialogHeaderStyles = makeStyles(() => ({
  cancelIcon: {
    color: '#c4c4c4',
    fontSize: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    color: 'black',
  },
}));

export const useExamplesDialogBodyStyles = makeStyles(() => ({
  title: {
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 30,
  },
  container: {
    padding: 16,
  },
}));

export const useExamplesDialogStyles = makeStyles(() => ({
  dialog: {
    '& .MuiDialog-paperScrollPaper': {
      height: (props) => (props.fullScreen ? '' : 'calc(100vh - 38px - 44px)'),
    },
  },
}));
