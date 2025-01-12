import { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Divider, Box, CardMedia, Stack, Menu, MenuItem, Fade } from '@mui/material';
import { PhoneRounded, Place } from '@mui/icons-material';
import { Link } from "react-router-dom";
import BookBtn from './BookBtn';

function NavBar() {
  const tabs = {
    color: 'white'
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
      <AppBar position="fixed" sx={{backgroundColor: '#11225A'}} elevation={10}>
        <Box sx={{backgroundColor: 'white',  height: '37px'}}>
          <Box sx={{height: '17px', display: 'flex', justifyContent: 'flex-end', gap: '10px', position: 'relative', top: '10px', right: '25px'}}>
          
            <Stack direction='row' gap='20px'>
              <Stack  direction='row' gap='15px'>
                <Place sx={{color: '#11225A', width: '18px', position: 'relative', bottom: '2px'}} />
                <Typography
                variant="body2"
                sx={{color:  '#11225A'}}
                > 
                  65 Howard Rd, Padstow 2211
                </Typography>

              </Stack>
          
              <Divider orientation='vertical' sx={{ borderColor: '#11225A', borderWidth: '1px', borderRight: 'none', borderTop: 'none', borderBottom: 'none', position: 'relative', top: '2px'}} flexItem/> 
              
              <Stack direction='row' gap='15px'>
                <PhoneRounded sx={{color: '#11225A', width: '18px', position: 'relative', bottom: '1px'}} />
                <Typography
                  variant="body2"
                  sx={{color:  '#11225A'}}
                > 
                  (02) 9792 6655 
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

          <Toolbar sx={{height: '64px', display: 'flex', justifyContent: 'space-between'}}>
            <CardMedia variant='outlined' sx={{minWidth: '149px', height: '45px', border: '2px solid whitesmoke', position: 'relative', left: '30px'}}
              image='mdplus logo 231110.jpg' title='mdplus logo'
            />
              <Tabs sx={{position: 'relative', top: '7px'}}>
                <Tab style={tabs} label="Home" component={Link} to='/'/>
                <Tab style={tabs} label="Services" component={Link} to='/services' onMouseEnter={handleHover} /> 
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    TransitionComponent={Fade}
                    
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                      'dense': 'true',
                      'onMouseLeave': handleClose
                    }}
                    sx={{width: '12%'}}
                    
                  >
                    <MenuItem onClick={handleClose}>Appointments</MenuItem>
                    <MenuItem onClick={handleClose}>Fees</MenuItem>
                    <MenuItem onClick={handleClose}>Policies</MenuItem>
                    
                  </Menu>

                <Tab style={tabs} label="News" component={Link} to='/news'/> 
                <Tab style={tabs} label="Resources"component={Link} to='/resources'/>
                <Tab style={tabs} label="Contact Us" component={Link} to='/contact'/> 
              </Tabs>
            <BookBtn size='medium'/>
          </Toolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar