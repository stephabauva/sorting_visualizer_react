import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function InputSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.getArraySize(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    props.getArraySize(event.target.value);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 300) {
      setValue(300);
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
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
            />
            </Grid>
            <Grid item>
            <Input
                className={classes.input}
                value={value}
                margin="dense"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                step: 10,
                min: 0,
                max: 300,
                type: 'number',
                'aria-labelledby': 'input-slider',
                }}
            />
            </Grid>
        </Grid>
        </div>
    </div>
  );
}