
import Button from '@material-ui/core/Button';
import React from "react";


export default function GenerateList(props) {
  const size = props.ArraySize;

  const createRandomNumber = (event) => {
    if (size > 0) {
      const myArray = [...Array(size)].map(_=>Math.ceil(Math.random()*300));
      console.log(myArray);
    };
    
  };
  
  

  return (
    <div className="generate-list">
      <Button 
      variant="contained" 
      color="primary" 
      disableElevation
      onClick={createRandomNumber}>
        Generate List
      </Button>
    </div>
  );
}