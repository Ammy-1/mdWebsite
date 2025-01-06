import { AppBar, Toolbar, Typography, Button, Tabs, Tab, Divider, Box, CardMedia, Stack } from '@mui/material';
import { PhoneRounded, Place } from '@mui/icons-material';
import { Link } from "react-router-dom";

function NavBar() {
  const tabs = {
    color: 'white'
  }
  
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
                  65 Howard Rd, Padstow 
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
            <CardMedia variant='outlined' sx={{width: '149px', height: '45px', border: '2px solid whitesmoke', position: 'relative', left: '30px'}}
              image='mdplus logo 231110.jpg' title='mdplus logo'
            />
              <Tabs sx={{position: 'relative', left: '20px', top: '7px'}}>
                <Tab style={tabs} label="Home" component={Link} to='/'/>
                <Tab style={tabs} label="Services" component={Link} to='/services' /> 
                <Tab style={tabs} label="Policies" component={Link} to='/policies' />
                <Tab style={tabs} label="News" component={Link} to='/news'/> 
                <Tab style={tabs} label="Resources"component={Link} to='/resources'/>
                <Tab style={tabs} label="Contact Us" component={Link} to='/contact'/> 
              </Tabs>
            <Button variant='contained' color='error' size='medium' >Book Appointment</Button>
          </Toolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar