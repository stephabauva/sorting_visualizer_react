import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

import React from 'react';

import store from '../store'

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function InputSlider(props) {
  const classes = useStyles(); //material-ui

  const [sliderValue, setSliderValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    console.log(newValue);
    if (newValue > 0) {
      setSliderValue(newValue);
      const newArray = [...Array(newValue)].map(_=>Math.ceil(Math.random()*300));
      store.dispatch({
        type: 'SET_LIST',
        payload: newArray
      })
    };
  };

  const handleInputChange = (event, newValue) => {
    setSliderValue(event.target.sliderValue === '' ? '' : Number(event.target.sliderValue));
    // props.getArraySize(event.target.sliderValue);
  };

  const handleBlur = () => {
    if (sliderValue < 0) {
      setSliderValue(0);
    } else if (sliderValue > 300) {
      setSliderValue(300);
    }
  };

  return (
    <div className="slider-container">
        <div className={classes.root}>
        <Typography id="input-slider" gutterBottom>
            Size of the list
        </Typography>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            <Slider
                value={typeof sliderValue === 'number' ? sliderValue : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
            />
            </Grid>
            <Grid item>
            <Input
                className={classes.input}
                value={sliderValue}
                margin="dense"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                step: 1,
                min: 10,
                max: 300,
                type: 'number',
                'aria-labelledby': 'input-slider',
                }}
            />
            </Grid>
        </Grid>
        </div>
        {/* <div><SortingVisualizer /></div> */}
    </div>
    
    
  );
}
