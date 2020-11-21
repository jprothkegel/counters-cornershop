import { makeStyles } from '@material-ui/core/styles';

export const useCreateCounterHeaderStyles = makeStyles((theme) => ({
  cancelIcon: {
    color: '#c4c4c4',
    fontSize: 28,
  },
  button: {
    width: 86,
    height: 40,
    marginLeft: 'auto',
    marginRight: 16,
    '&.MuiButton-contained.Mui-disabled': {
      backgroundColor: `${theme.palette.primary.main}80`,
      color: 'white',
    },
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    color: 'black',
  },
}));

export const useCreteCounterBodyStyles = makeStyles(() => ({
  container: {
    padding: 16,
    '& > :not(:last-child)': {
      marginBottom: 9,
    },
  },
  title: {
    fontSize: 17,
    fontWeight: 500,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 400,
    color: '#888B90',
  },
  link: {
    color: '#888B90',
    cursor: 'pointer',
  },
}));

export const useCreateCounterStyles = makeStyles(() => ({
  dialog: {
    '& .MuiDialog-paperScrollPaper': {
      height: (props) => (props.fullScreen ? '' : 'calc(100vh - 38px - 44px)'),
    },
  },
}));
