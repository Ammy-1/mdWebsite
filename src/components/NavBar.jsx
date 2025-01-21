import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Divider, Box, CardMedia, Stack, Menu, MenuItem, Fade, IconButton } from '@mui/material';
import { PhoneRounded, Place, ArrowDropDown, ArrowDropUp, MenuRounded } from '@mui/icons-material';
import { Link, useLocation } from "react-router-dom";
import BookBtn from './BookBtn';

function NavBar() {
  const tabs = {
    color: 'white'
  }
  const [dropServices, setDropServices] = useState(false);
  const [anchorElService, setAnchorElService] = useState(null);
  const serviceOpen = Boolean(anchorElService);
  const location = useLocation(); 
  const [value, setValue] = useState(0);

  const dropServicesOpen = () => {
    setDropServices(prevState => !prevState);
  }

  const dropServicesClose = () => {
    setDropServices(false);
  }

  const handleServicesOpen = (event) => {
    setAnchorElService(event.currentTarget);
  };

  const handleServiceClose = () => {
    setAnchorElService(null);
  };

  const [anchorElMobile, setAnchorElMobile] = useState(null);
  const mobileOpen = Boolean(anchorElMobile);

  const handleMobileOpen = (event) => {
    if (!anchorElMobile) {
      setAnchorElMobile(event.currentTarget);
    }

  };

  const handleMobileClose = () => {
    setAnchorElMobile(null);
    dropServicesClose();
  };

  useEffect(() => {
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
          <Box sx={{height: '17px', display: 'flex', justifyContent: 'flex-end', gap: '10px', position: 'relative', top: '10px', right: '25px', ['@media (max-width: 450px)']: {gap: '5px', right: '30px'}}}>
          
            <Stack direction='row' gap='20px' sx={{['@media (max-width: 450px)']: {gap: '10px'}}}>
              <Stack  direction='row' gap='15px' sx={{['@media (max-width: 450px)']: {gap: '5px'}}}>
                <Place sx={{color: '#11225A', width: '18px', position: 'relative', bottom: '2px', ['@media (max-width: 450px)']: {width: '15px', bottom: '5px'}}} />
                <Typography
                variant="body2"
                sx={{color:  '#11225A', ['@media (max-width: 450px)']: {fontSize: '0.7rem'}}}
                > 
                  65 Howard Rd, Padstow 2211
                </Typography>

              </Stack>
          
              <Divider orientation='vertical' sx={{ borderColor: '#11225A', borderWidth: '1px', borderRight: 'none', borderTop: 'none', borderBottom: 'none', position: 'relative', top: '2px'}} flexItem/> 
              
              <Stack direction='row' gap='15px' sx={{['@media (max-width: 450px)']: {gap: '5px'}}}>
                <PhoneRounded sx={{color: '#11225A', width: '18px', position: 'relative', bottom: '1px', ['@media (max-width: 450px)']: {width: '15px', bottom: '5px'}}} />
                <Typography
                  variant="body2"
                  sx={{color:  '#11225A', ['@media (max-width: 450px)']: {fontSize: '0.7rem'}}}
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
            <Tabs sx={{position: 'relative', '& .MuiTabs-indicator': {backgroundColor: 'white'}, color: 'inherit', height: '65px', ['@media (max-width: 1025px)']: {display: 'none'}}}  value={value} >
              <Tab style={tabs} label="Home" component={Link} to='/' tabIndex={0} />
              <Tab style={tabs} label="Services" onClick={handleServicesOpen} tabIndex={0} icon={serviceOpen ? <ArrowDropUp/> : <ArrowDropDown/>} iconPosition='end' /> 
                <Menu
                  id="services-menu"
                  anchorEl={anchorElService}
                  open={serviceOpen}
    
                  onClose={handleServiceClose}
                  TransitionComponent={Fade}
                  
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    'dense': true,
                    'sx': { width: anchorElService && anchorElService.offsetWidth}
                  }}
                  
                  sx={{position: 'absolute', top: '-8px', '& .MuiPaper-root': { borderTopLeftRadius: '0', borderTopRightRadius: '0'} }}
                >
                  <MenuItem onClick={handleServiceClose} component={Link} to='/services/appointments' >Appointments</MenuItem>
                  <MenuItem onClick={handleServiceClose} component={Link} to='/services/fees'>Fees</MenuItem>
                  <MenuItem onClick={handleServiceClose} component={Link} to='/services/policies'>Policies</MenuItem>
                  
                </Menu>
              
              <Tab style={tabs} label="Contact Us" component={Link} to='/contact' tabIndex={0}/> 
              <Tab style={tabs} label="Notices" component={Link} to='/notices' tabIndex={0}/> 
              <Tab style={tabs} label="Resources"component={Link} to='/resources' tabIndex={0}/>
            </Tabs>
            
          <Box sx={{['@media (max-width: 1025px)']: {display: 'none'}}}>
            <BookBtn size='medium' />
          </Box>

          <Box sx={{['@media (min-width: 1025px)']: {display: 'none'}}}>
            <IconButton aria-label="menu button"  onClick={handleMobileOpen}>
              <MenuRounded sx={{color: 'white', width: '35px', height: 'auto'}  }/>
                <Menu
                    id="mobile-menu"
                    anchorEl={anchorElMobile}
                    open={mobileOpen}
      
                    onClose={handleMobileClose}
                    TransitionComponent={Fade}
                    elevation={20}
                    
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                      'dense': true,
                      
                    }}
                    sx={{position: 'absolute', top: '6px', left: '15px', '& .MuiPaper-root': { borderTopLeftRadius: '0', borderTopRightRadius: '0'} }}
                   
                  >
                    <MenuItem onClick={handleMobileClose} component={Link} to='/' >Home</MenuItem>
                    <MenuItem sx={{display: 'flex', flexWrap: 'wrap'}}>
                     <Box onClick={dropServicesOpen} sx={{position: 'relative', top: '4px'}}>
                        <Stack direction='row' gap='5px'>
                          Services
                          <Box sx={{position: 'relative', bottom: '1px'}}>
                            {dropServices ? <ArrowDropUp/> : <ArrowDropDown/>}
                          </Box>
                        </Stack>
                        {dropServices && (
                          <Box sx={{backgroundColor: 'whitesmoke', width: '225px', height: 'auto'}}>
                            <MenuItem onClick={handleMobileClose} component={Link} to='/services/appointments' >Appointments</MenuItem>
                            <MenuItem onClick={handleMobileClose} component={Link} to='/services/fees'>Fees</MenuItem>
                            <MenuItem onClick={handleMobileOpen} component={Link} to='/services/policies'>Policies</MenuItem>
                          </Box>
                        )}
                     </Box>
                    </MenuItem>
                    <MenuItem onClick={handleMobileClose} component={Link} to='/contact'>Contact Us</MenuItem>
                    <MenuItem onClick={handleMobileClose} component={Link} to='/notices'>Notices</MenuItem>
                    <MenuItem onClick={handleMobileClose} component={Link} to='/resources'>Resources</MenuItem>
                    <MenuItem onClick={handleMobileClose} ><BookBtn size='large'/></MenuItem>
                    
                </Menu>
            </IconButton>
          </Box>
         
          </Toolbar>
        </AppBar>

       
      </>
    )
  }
  
  export default NavBar