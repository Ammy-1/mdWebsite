import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Divider, Box, CardMedia, Stack, Menu, MenuItem, Fade } from '@mui/material';
import { PhoneRounded, Place, ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Link, useLocation } from "react-router-dom";
import BookBtn from './BookBtn';

function NavBar() {
  const tabs = {
    color: 'white'
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation(); // Get the current route
  const [value, setValue] = useState(0);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log( location.pathname );
    switch (true) {
      case location.pathname === '/':
        setValue(0);
        break;
      case location.pathname.includes('/services'):
        setValue(1);
        break;
      case location.pathname === '/contact':
        setValue(2);
        break;
      case location.pathname === '/notices':
        setValue(3);
        break;
      case location.pathname === '/resources':
        setValue(4);
        break;
      default:
        setValue(false);
    }
  }, [location.pathname]);
  
  return (
    <>
      <AppBar position="fixed" sx={{backgroundColor: '#11225A'}} elevation={15}>
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
              <Tabs sx={{position: 'relative', '& .MuiTabs-indicator': {backgroundColor: 'white'}, color: 'inherit', height: '65px'}}  value={value} >
                <Tab style={tabs} label="Home" component={Link} to='/' tabIndex={0} />
                <Tab style={tabs} label="Services" onClick={handleOpen} tabIndex={0} icon={open ? <ArrowDropUp/> : <ArrowDropDown/>} iconPosition='end' /> 
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
     
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                      'dense': true,
                      'sx': { width: anchorEl && anchorEl.offsetWidth}
                    }}
                    
                    sx={{position: 'absolute', top: '-8px', '& .MuiPaper-root': { borderTopLeftRadius: '0', borderTopRightRadius: '0'} }}
                  >
                    <MenuItem onClick={handleClose} component={Link} to='/services/appointments' >Appointments</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to='/services/fees'>Fees</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to='/services/policies'>Policies</MenuItem>
                    
                  </Menu>
                
                <Tab style={tabs} label="Contact Us" component={Link} to='/contact' tabIndex={0}/> 
                <Tab style={tabs} label="Notices" component={Link} to='/notices' tabIndex={0}/> 
                <Tab style={tabs} label="Resources"component={Link} to='/resources' tabIndex={0}/>
              </Tabs>
              
            <BookBtn size='medium'/>
          </Toolbar>
        </AppBar>

       
      </>
    )
  }
  
  export default NavBar