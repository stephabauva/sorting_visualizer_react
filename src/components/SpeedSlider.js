import React from 'react';
import store from '../store'


import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
    padding: 5,
  },
  margin: {
    height: theme.spacing(1),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({ //styled-component ?
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: 0,
    marginRight: 10,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function InputSpeedSlider(props) {
  const INITIAL_SPEED = store.getState()['sortSpeedReducer']['niceSpeed']
  const classes = useStyles();
    // create inital slider value (0) and a function to update it
  const [sliderValue, setSliderValue] = React.useState(0);

  //handleSpeedChange gets the value from the slider
  const handleSpeedChange = (event, newValue) => {
    // console.log(newValue);
    const lever = 1;
    const newSpeed = newValue * lever;
    if (newSpeed >= 0) {
      setSliderValue(newSpeed); //updates the previous value of the slider
      // dispatch the new list: update the store with our new list
      store.dispatch({
        type: 'SET_SORT_SPEED',
        payload: newSpeed
      })
    };
  };

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom>Slow the sorting speed down (ms)</Typography>
      <PrettoSlider valueLabelDisplay="auto"  defaultValue={INITIAL_SPEED} onChange={handleSpeedChange}/>
    </div>
  );
}
