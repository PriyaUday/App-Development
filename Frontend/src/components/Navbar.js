// // import React, { useState } from 'react';
// // import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Menu, MenuItem, IconButton } from '@mui/material/';
// // import LogoutIcon from '@mui/icons-material/Logout';
// // import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// // import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
// // import { Link } from 'react-router-dom';
// // import UserPopup from './UserPopup';

// // const Navbar = () => {
// //   const [count, setCount] = useState(null);
// //   const [menuAnchorEl, setMenuAnchorEl] = useState(null);

// //   const handleMenuOpen = (event) => {
// //     setMenuAnchorEl(event.currentTarget);
// //   };

// //   const handleMenuClose = () => {
// //     setMenuAnchorEl(null);
// //   };

// //   return (
// //     <AppBar sx={{ background: '#000000' }}>
// //       <Toolbar>
// //         <IconButton color="inherit" onClick={handleMenuOpen} edge="start" sx={{ mr: 2 }}>
// //           <WidgetsOutlinedIcon fontSize="large" />
// //         </IconButton>
// //         <Menu
// //           anchorEl={menuAnchorEl}
// //           open={Boolean(menuAnchorEl)}
// //           onClose={handleMenuClose}
// //           anchorOrigin={{
// //             vertical: 'bottom',
// //             horizontal: 'left',
// //           }}
// //           transformOrigin={{
// //             vertical: 'top',
// //             horizontal: 'left',
// //           }}
// //           getContentAnchorEl={null}
// //         >
// //           <MenuItem onClick={handleMenuClose}>
// //             <Link to="/AboutUs" className="link_nav">
// //               About Us
// //             </Link>
// //           </MenuItem>
// //           <MenuItem onClick={handleMenuClose}>
// //             <Link to="/ClientReview" className="link_nav">
// //               Clients Review
// //             </Link>
// //           </MenuItem>
// //           <MenuItem onClick={handleMenuClose}>
// //             <Link to="/Location" className="link_nav">
// //               Branches
// //             </Link>
// //           </MenuItem>
// //         </Menu>
// //         <Tabs
// //           sx={{ margin: 'auto' }}
// //           indicatorColor="primary"
// //           value={count}
// //           onChange={(e, count) => setCount(count)}
// //           textColor="black"
// //         >
// //           <Link className="link" to="/land">
// //             <Tab textColor="white" label="HOME" />
// //           </Link>
// //           <Link className="link" to="/recipe">
// //             <Tab textColor="white" label="APPOINTMENTS" />
// //           </Link>
// //           <Link to="/RescheduleForm" className="link">
// //             <Tab textColor="white" label="EDIT BOOKINGS" />
// //           </Link>
// //           <Link to="/CustomerSupportForm" className="link">
// //             <Tab textColor="white" label="SUPPORT" />
// //           </Link>
// //         </Tabs>
// //         <Link className="link">
// //           <NotificationsActiveOutlinedIcon
// //             fontsize="large"
// //             indicatorColor="black"
// //             value={count}
// //             onChange={(e, count) => setCount(count)}
// //             textColor="black"
// //           />
// //         </Link>
// //         <span className="horizontal-space"></span>
// //         <Link to="/home" className="link">
// //   <LogoutIcon
// //     fontSize="large"
// //     color="black"
// //   />
// // </Link>

// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton } from '@mui/material/';
// import LogoutIcon from '@mui/icons-material/Logout';
// import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
// import { Link } from 'react-router-dom';
// import UserInfoPopover from './UserInfoPopover';

// const Navbar = () => {
//   const [count, setCount] = useState(null);

//   return (
//     <AppBar sx={{ background: '#000000' }}>
//       <Toolbar>
//         <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
//           <WidgetsOutlinedIcon fontSize="large" />

    


//         </IconButton>
//         <Tabs
//           sx={{ margin: 'auto' }}
//           indicatorColor="primary"
//           value={count}
//           onChange={(e, count) => setCount(count)}
//           textColor="black"
//         >
//           <Link className="link" to="/land">
//             <Tab textColor="white" label="HOME" />
//           </Link>
//           <Link className="link" to="/recipe">
//             <Tab textColor="white" label="APPOINTMENTS" />
//           </Link>
//           <Link to="/RescheduleForm" className="link">
//             <Tab textColor="white" label="EDIT BOOKINGS" />
//           </Link>
//           <Link to="/CustomerSupportForm" className="link">
//             <Tab textColor="white" label="SUPPORT" />
//           </Link>
//         </Tabs>
//         <Link className="link">
//           <NotificationsActiveOutlinedIcon
//             fontsize="large"
//             indicatorColor="black"
//             value={count}
//             onChange={(e, count) => setCount(count)}
//             textColor="black"
//           />
//         </Link>
//         <span className="horizontal-space"></span>
//         <UserInfoPopover />
        
      
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { Link } from 'react-router-dom';
import UserInfoPopover from './UserInfoPopover';

const Navbar = () => {
  const [count, setCount] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar sx={{ background: '#000000' }}>
      <Toolbar>
        <IconButton color="inherit" onClick={handleMenuOpen} edge="start" sx={{ mr: 2 }}>
          <WidgetsOutlinedIcon fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/AboutUs" className="link_nav">
              About Us
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/ClientReview" className="link_nav">
              Clients Review
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Location" className="link_nav">
              Branches
            </Link>
          </MenuItem>
        </Menu>
        <Tabs
          sx={{ margin: 'auto' }}
          indicatorColor="primary"
          value={count}
          onChange={(e, count) => setCount(count)}
          textColor="black"
        >
          <Link className="link" to="/land">
            <Tab textColor="white" label="HOME" />
          </Link>
          <Link className="link" to="/recipe">
            <Tab textColor="white" label="APPOINTMENTS" />
          </Link>
          <Link to="/RescheduleForm" className="link">
            <Tab textColor="white" label="EDIT BOOKINGS" />
          </Link>
          <Link to="/CustomerSupportForm" className="link">
            <Tab textColor="white" label="SUPPORT" />
          </Link>
        </Tabs>
        <Link className="link">
          <NotificationsActiveOutlinedIcon
            fontsize="large"
            indicatorColor="black"
            value={count}
            onChange={(e, count) => setCount(count)}
            textColor="black"
          />
        </Link>
        <span className="horizontal-space"></span>
        <UserInfoPopover />
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
