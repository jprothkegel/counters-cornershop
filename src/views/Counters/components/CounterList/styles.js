import { makeStyles } from '@material-ui/core/styles';

export const useCounterStyles = makeStyles((theme) => ({
  typo: {
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 'normal',
    letterSpacing: '0.02em',
  },
  number: {
    number: {
      fontSize: 20,
      fontWeight: 600,
    },
  },
  container: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    marginBottom: 7,
  },
  selectedContainer: {
    backgroundColor: 'rgba(255, 149, 0, 0.2)',
    borderRadius: 6,
    marginBottom: 7,
  },
  button: {
    color: theme.palette.primary.main,
  },
}));

export const useCounterHeaderStyles = makeStyles(() => ({
  mainTypo: {
    fontSize: 17,
    fontWeight: 600,
  },
  subTypo: {
    fontSize: 17,
    fontWeight: 500,
    color: '#888B90',
  },
  container: {
    '& > :not(:last-child)': {
      marginRight: 7,
    },
    padding: '0px 14px',
  },
  selectedTypo: {
    fontSize: 17,
    fontWeight: 600,
    color: '#ff9500',
  },
}));
