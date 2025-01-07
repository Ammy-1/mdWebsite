import {Typography, Divider, Box } from '@mui/material';
import { PhoneRounded, Place, Mail, Fax } from '@mui/icons-material';

function MdFooter() {
  
  return (
    <>
      <Box sx={{
        backgroundColor: '#11225A',
        width: '100vw',
        minHeight: '55px',
        position: 'absolute',
        boxSizing: 'border-box',
        zIndex: '1100',
        left: 0,
        right: 0,
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        gap: '20px',
        padding: '10px'
      }}>
          <Typography variant='body1' sx={{color: 'white', fontWeight: 'bold'}}>MDPlus Clinic</Typography>
          <Divider orientation='vertical' sx={{ borderColor: 'white', height: '30px', borderWidth: '1px', borderRight: 'none', borderTop: 'none', borderBottom: 'none'}} flexItem/> 
          
          <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'center', gap: '50px', flexWrap: 'wrap'}}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <Place sx={{ width: '18px', position: 'relative', bottom: '1px'}} />
              <Box>
                <Typography variant='body2' sx={{color: 'white', fontSize: '0.6em'}}> Address</Typography>  
                <Typography variant='body2' sx={{color: 'white'}}> 65 Howard Rd, Padstow 2211</Typography>
              </Box>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <PhoneRounded sx={{ width: '18px', position: 'relative', bottom: '1px'}} />
              <Box>
                <Typography variant='body2' sx={{color: 'white', fontSize: '0.6em'}}> Phone</Typography>  
                <Typography variant='body2' sx={{color: 'white'}}>(02) 9792 6655</Typography>
              </Box>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <Mail sx={{ width: '18px', position: 'relative', bottom: '1px'}} />
              <Box>
                <Typography variant='body2' sx={{color: 'white', fontSize: '0.6em'}}>Email</Typography>  
                <Typography variant='body2' sx={{color: 'white'}}>mdplus.reception@gmail.com</Typography>
              </Box>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <Fax sx={{ width: '18px', position: 'relative', bottom: '1px'}} />
              <Box>
                <Typography variant='body2' sx={{color: 'white', fontSize: '0.6em'}}>Fax</Typography>  
                <Typography variant='body2' sx={{color: 'white'}}>(02) 8252 2055</Typography>
              </Box>
            </Box>
          </Box>
         
        </Box>
      </>
    )
  }
  
  export default MdFooter