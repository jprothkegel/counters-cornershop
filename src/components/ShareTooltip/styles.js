import { makeStyles } from '@material-ui/core/styles';

export const useTooltipContentStyles = makeStyles((theme) => ({
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: 600,
    margin: '7px 10px 13px 0px',
  },
  button: {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.01)',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  paperNote: {
    fontSize: 84,
    margin: 5,
  },
}));
