import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  textField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1px solid rgba(0, 0, 0, 0.15)',
      },
    },
    boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.05)',
  },
}));

export default useStyles;
