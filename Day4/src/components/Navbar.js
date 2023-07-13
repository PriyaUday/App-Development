import React, { useState } from "react";
import {AppBar, Toolbar, Typography,Tabs,Tab,Box} from '@mui/material/';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import { Link } from 'react-router-dom';

   const Header =()=> {
        const [Count, setCount] = useState();
        return (
            <body>
                <div>
                    <Box className="nav">
                        <React.Fragment>
                            <AppBar sx={{ background: '#000000' }}>
                                <Toolbar>
                                    
                                    <Tabs sx={{ margin: 'auto'}} indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='inherit'>
                                       
                                    <Link className="link" to='/recipe'>
                                        <Tab  textColor="white" label="My Appointments" />
                                        </Link>
                                        <Link className="link">
                                        <Tab  textColor="white" label="Edit Bookings" />
                                        </Link>
                                        <Link className="link" to="/CustomerSupportForm" >
                                        <Tab textColor="white" label="Customer support" />
                                        </Link>
                                    </Tabs>
                                    <Link className="link">
                                    <NotificationsNoneIcon fontsize="large" indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='white'></NotificationsNoneIcon>
                                    </Link>
                                    <Link className="link">
                                    <PersonOutlineIcon fontsize="large" indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='inherit'></PersonOutlineIcon>
                                    </Link>
                                    </Toolbar>
                            </AppBar>
                        </React.Fragment>
                    </Box>
                </div>
            </body>
        );
    }
export default Header;