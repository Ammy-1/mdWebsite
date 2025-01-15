import { Box, Paper, Stack, Typography} from '@mui/material';
import {Place, PhoneRounded, Mail, Fax} from '@mui/icons-material'
import OpeningHrs from '../components/OpeningHrs';

function ContactUs() {
  
  return (
      
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: 'calc(100% - 100px)', margin: '100px 0px 50px', position: 'relative', left: '50px' }}> 
      <Typography variant='h2' sx={{padding: '50px'}}> Contact Us </Typography>
      <Box sx={{ display: 'flex', gap: '50px', flexGrow: 1, flexWrap: 'wrap'}}>
        <Box sx={{ display: 'flex', alignItems: 'stretch', gap: '30px', flexDirection: 'column', width: '50%', flexGrow: 2}}>
          <Paper sx={{padding: '20px', }}>
            <Typography variant='h5' sx={{paddingBottom: '10px'}}> Find us at: </Typography>
            <Box sx={{display: 'flex', flexShrink: 2, flexDirection: 'column', padding: '10px 0px 20px' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6619.130184179823!2d151.03154179999999!3d-33.952312299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bec4474e049d%3A0x8d124e5d6cbab8bd!2sMDPlus%20Medical%20Clinic%20Padstow!5e0!3m2!1sen!2sau!4v1736653520410!5m2!1sen!2sau"
                
                height="150"  
                loading="lazy" 
              />
            </Box>
              <Stack  direction='row' gap='5px'>
                <Place sx={{ width: '18px', position: 'relative', bottom: '1px'}} />
                <Typography variant='body2' sx={{fontWeight: 'bold'}}> Address:</Typography>  
                <Typography variant='body2' > 65 Howard Rd, Padstow 2211</Typography>
              </Stack>

              
              <Stack  direction='row' gap='5px'>
                <PhoneRounded sx={{ width: '18px', position: 'relative', bottom: '1px'}} />
                <Typography variant='body2' sx={{fontWeight: 'bold'}}> Phone:</Typography>  
                <Typography variant='body2'>(02) 9792 6655</Typography>
              </Stack>

              <Stack  direction='row' gap='5px'>
                <Mail sx={{ width: '18px', position: 'relative', bottom: '1px'}} />
                <Typography variant='body2' sx={{fontWeight: 'bold'}}>Email:</Typography>  
                <Typography variant='body2'>mdplus.reception@gmail.com</Typography>
              </Stack>

             
              <Stack direction='row' gap='5px'>
                <Fax sx={{ width: '18px', position: 'relative', bottom: '1px'}} />
                <Typography variant='body2' sx={{fontWeight: 'bold'}}>Fax:</Typography>  
                <Typography variant='body2'>(02) 8252 2055</Typography>
              </Stack>
          </Paper>
          <Paper sx={{padding: '20px'}}>
            <Typography variant='h6' sx={{paddingBottom: '10px'}}> Telephone access </Typography>
            <Typography variant='body2' > GPs in the practice may be contacted during normal opening hours. If the the GP is with a patient, a message will be taken and the reception staff will advise when it is likely that the GP will be able to return your call. In an emergency, your call will always be put through to a GP</Typography>
          </Paper>
        </Box>
       
        <Paper sx={{display: 'flex', flexGrow: 1, flexDirection: 'column', padding: '20px'}}>
          <Typography variant='h5' sx={{paddingBottom: '10px', position: 'relative', left: '10px'}}> Opening Hours </Typography>
          <OpeningHrs/>
        </Paper>
      </Box>
        
    </Box>
    )
  }
  export default ContactUs;
  