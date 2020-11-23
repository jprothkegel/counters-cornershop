import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
  },
  nores: {
    fontSize: 22,
    fontWeight: 500,
    color: '#888B90',
  },
}));

export default useStyles;
