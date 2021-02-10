import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // console.log(props)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//   const id = props.id;
  const sort_cat = props.sort_cat;
  const sort_algo = props.sort_algo;
  // console.log(sort_algo);

  return (
    <div className="button-menus">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {sort_cat}
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Merge Sort</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>

  );
}
