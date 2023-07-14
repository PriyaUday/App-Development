// import React, { useState } from 'react';
// import { IconButton, Popover, Typography, Button } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';

// const UserInfoPopover = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here
//     console.log('Logout clicked');
//     handleClose();
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'user-info-popover' : undefined;

//   const userInfo = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     role: 'User',
//   };

//   return (
//     <div>
//       <IconButton color="inherit" onClick={handleOpen}>
//         <PersonIcon />
//       </IconButton>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//       >
//         <div className="user-info-container">
//           <Typography variant="h6">Hey {userInfo.name} !</Typography>
          
//           <Typography>e-mail: {userInfo.email}</Typography>
//           <Typography>Role: {userInfo.role}</Typography>
//           <br/>
//           <Button onClick={handleLogout} variant="outlined" color="error"><center>Logout</center></Button>
//           </div>
//       </Popover>
//     </div>
//   );
// };

// export default UserInfoPopover;
import React, { useState } from 'react';
import { IconButton, Popover, Typography, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const UserInfoPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
    handleClose();

    // Redirect to home page
    window.location.href = '/';
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-info-popover' : undefined;

  const userInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'User',
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleOpen}>
        <PersonIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className="user-info-container">
          <Typography variant="h6">Hey {userInfo.name}!</Typography>
          <Typography>e-mail: {userInfo.email}</Typography>
          <Typography>Role: {userInfo.role}</Typography>
          <br />
          <Button onClick={handleLogout} variant="outlined" color="error">
            <center>Logout</center>
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default UserInfoPopover;
