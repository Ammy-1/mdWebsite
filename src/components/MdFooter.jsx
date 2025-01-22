import {Typography, Divider, Box } from '@mui/material';
import { PhoneRounded, Place, Fax } from '@mui/icons-material';

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
        padding: '10px',
        ['@media (max-width: 1025px)']: {justifyContent: 'center'}
      }}>
          <Typography 
            variant='body1' 
            sx={{color: 'white', fontWeight: 'bold'}}
          >
            MDPlus Clinic
          </Typography>
          <Divider 
            orientation='vertical' 
            sx={{ 
              borderColor: 'white', 
              height: '30px', 
              borderWidth: '1px', 
              borderRight: 'none', 
              borderTop: 'none', 
              borderBottom: 'none', 
              ['@media (max-width: 1025px)']: {display: 'none'}
            }} 
            flexItem
          /> 
          
          <Box 
            sx={{
              display: 'flex', 
              alignContent: 'center', 
              justifyContent: 'space-evenly',  
              gap: '100px', 
              flexWrap: 'wrap', 
              ['@media (max-width: 875px)']: {
                width: '500px', 
                gap: '20px', 
                justifyContent: 'center'
              }, 
              ['@media (max-width: 450px)']: {
                justifyContent: 'space-evenly', 
                paddingBottom:'30px', 
                paddingLeft: '20px',
                paddingRight: '10px'
              }
            }}
          >
            <Box 
              sx={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px'
              }}
            >
              <Place 
                sx={{
                  color: 'white', 
                  width: '18px', 
                  position: 'relative', 
                  bottom: '1px'
                }}
              />
              <Box>
                <Typography variant='body2' sx={{color: 'white', fontSize: '0.6em'}}> 
                  Address
                </Typography>  
                <Typography variant='body2' sx={{color: 'white'}}>
                  65 Howard Rd, Padstow 2211
                </Typography>
              </Box>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <PhoneRounded 
                sx={{ 
                  color: 'white', 
                  width: '18px', 
                  position: 'relative', 
                  bottom: '1px'
                }}
              />
              <Box>
                <Typography variant='body2' sx={{color: 'white', fontSize: '0.6em'}}>
                  Phone
                </Typography>  
                <Typography variant='body2' sx={{color: 'white'}}>
                  (02) 9792 6655
                </Typography>
              </Box>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <Fax 
                sx={{ 
                  color: 'white', 
                  width: '18px', 
                  position: 'relative', 
                  bottom: '1px'
                }}
              />
              <Box>
                <Typography variant='body2' sx={{color: 'white', fontSize: '0.6em'}}>
                  Fax
                </Typography>  
                <Typography variant='body2' sx={{color: 'white'}}>
                  (02) 8252 2055
                </Typography>
              </Box>
            </Box>
          </Box>
         
        </Box>
      </>
    )
  }
  
  export default MdFooter