import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    marginLeft: 12,
    backgroundColor: '#FBFBFB',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  },
  adornment: {
    paddingRight: 16,
    color: 'rgba(136, 139, 144, 1)',
  },
  textfield: {
    maxWidth: 379,
  },
}));

export default useStyles;
