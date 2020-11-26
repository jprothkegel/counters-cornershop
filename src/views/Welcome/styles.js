import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    padding: 42,
    height: '100%',
  },
  title: {
    fontWeight: 700,
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
  },
}));

export default useStyles;
