import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  '@keyframes animation': {
    '0%': {
      transform: 'scale(0.2)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.0)',
      opacity: 0,
    },
  },
  wrapper: {
    position: 'relative',
    width: '114px',
    height: '114px',
  },
  littleBall: {
    width: '45px',
    height: '45px',
    backgroundColor: 'rgba(255, 149, 0, 1)',
    borderRadius: '50%',
    position: 'absolute',
    top: '34px',
    left: '34px',
    animation: '$animation 2s 0s ease-out infinite',
    'animation-fill-mode': 'both',
    border: '0px solid transparent',
  },
  middleBall: {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(255, 149, 0, 0.5)',
    borderRadius: '50%',
    position: 'absolute',
    top: '17px',
    left: '17px',
    animation: '$animation 2s 0.5s ease-out infinite',
    'animation-fill-mode': 'both',
    border: '0px solid transparent',
  },
  bigBall: {
    width: '114px',
    height: '114px',
    backgroundColor: 'rgba(255, 149, 0, 0.1)',
    borderRadius: '50%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    animation: '$animation 2s 1s ease-out infinite',
    'animation-fill-mode': 'both',
    border: '0px solid transparent',
  },
}));

export default useStyles;
