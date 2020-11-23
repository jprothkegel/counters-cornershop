import { makeStyles } from '@material-ui/core/styles';

export const useDialogTypeStyles = makeStyles((theme) => ({
  deleteButton: {
    backgroundColor: '#FFF',
    color: '#FF3B30',
  },
  secondaryButton: {
    backgroundColor: '#FFF',
    color: theme.palette.primary.main,
  },
}));

export const useMessageDialogStyles = makeStyles(() => ({
  text: {
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 400,
  },
  dialog: {
    '& .MuiPaper-rounded': {
      borderRadius: 10,
    },
  },
  container: {
    padding: '19px 27px',
  },
}));
