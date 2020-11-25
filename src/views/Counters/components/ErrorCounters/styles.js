import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: '#FFF',
    color: theme.palette.primary.main,
    border: '1px solid rgba(0, 0, 0, 0.01)',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
}));

export default useStyles;
