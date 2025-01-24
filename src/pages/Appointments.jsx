import { Box, Paper, List, ListItem, Typography, Stack} from '@mui/material';
import { Link } from 'react-router-dom'
import BookBtn from '../components/BookBtn';
import { Assignment, Home, MedicalServices, MeetingRoom, PhoneInTalkRounded } from '@mui/icons-material';

function Appointments() {
  
  return (
      
    <Box 
      sx={{ 
        display: 'flex',
        alignItems: 'center', 
        flexDirection: 'column', 
        width: 'calc(100% - 100px)', 
        margin: '100px 0px 50px', 
        position: 'relative', 
        left: '50px' 
      }}
    > 
      <Typography 
        variant='h3' 
        sx={{padding: '60px', ['@media (max-width: 600px)']: {fontSize: '2rem'}}}
      > 
        Appointments 
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          gap: '50px', 
          flexGrow: 1, 
          flexWrap: 'wrap'
        }}
      >
        <Paper 
          sx={{
            padding: '30px',
            display: 'flex', 
            alignItems: 'stretch', 
            flexDirection: 'column'
          }}
        >
          <Stack direction='row' gap='10px'>
              <MeetingRoom sx={{width: '50px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h4' sx={{paddingBottom: '20px'}}> Making an Appointment </Typography>
            </Stack>
         
          <Typography 
            variant='body1' 
            sx={{color: '#11225A', marginBottom: '20px', fontWeight: 'bold'}} 
          > 
            Please ring 9792 6655 or click the button below to book an appointment.
          </Typography>
          <Typography sx={{marginBottom: '20px'}}>
            Every effort will be made to accomodate your preferred time. If appointments are not avaliable, we can add your name to our cancellation list and contact you if any appointment times open up.
          </Typography>
          <Typography sx={{marginBottom: '20px', color: 'error.main'}}>
            Please be aware that certain appointments/services have an attached fee. 
            <Typography sx={{paddingLeft: '5px'}}  component={Link} to='/services/fees'>
              Learn More
            </Typography>
          </Typography>
          <BookBtn size='medium'/>
        </Paper>

      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'stretch', 
          gap: '30px', 
          flexDirection: 'column', 
          width: '50%', 
          flexGrow: 2
        }}
      >
          <Paper sx={{padding: '30px', flexGrow: 3}}>
            <Stack direction='row' gap='10px'>
              <PhoneInTalkRounded sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h5' sx={{paddingBottom: '20px'}}> Telephone Access </Typography>
            </Stack>
            <Typography variant='body1'> 
              GP in the practice can be contacted during normal opening hours. If the the GP is with a patient, the reception staff will take your message and give you a timeframe for when the GP would be able to return your call. In an emergency, please call 000.
            </Typography>
          </Paper>

          <Paper sx={{padding: '30px', flexGrow: 3}}>
            <Stack direction='row' gap='10px'>
              <Assignment sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h5' sx={{paddingBottom: '20px'}}> Getting the Results of Tests and Procedures </Typography>
            </Stack>
            <Typography variant='body1'>
              We will contact you if you require a follow-up appointment when we receive your results. Please book a follow up appointment with your doctor to discuss your results and, if needed, plan the next steps in your care.
            </Typography>
          </Paper>

          <Paper sx={{padding: '30px', flexGrow: 3}}>
            <Stack direction='row' gap='10px'>
              <Home sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h5' sx={{paddingBottom: '20px'}}> Home Visits </Typography>
            </Stack>
            
            <Typography variant='body1'>
              Home visits are only avaliable for regular patients. These visits are subject to the GP&apos;s discretion.
            </Typography>
          </Paper>
        </Box>
       
        <Paper 
          sx={{
            display: 'flex', 
            flexGrow: 1, 
            flexDirection: 'column', 
            padding: '20px'
          }}
        >
          <Stack direction='row' gap='10px'>
            <MedicalServices sx={{width: '50px', height: 'auto'}}/>
            <Typography 
              variant='h4' 
              sx={{
                padding: '20px 0px 10px', 
                position: 'relative', 
                left: '10px',
                 textWrap: 'wrap'
              }}
            >
              Services
            </Typography>
          </Stack>

          <List 
            sx={{ 
              listStyleType: 'disc', 
              color: 'black', 
              position: 'relative', 
              left: '20px'
            }} 
            dense={false}
          >
            <ListItem sx={{ display: 'list-item'}}>Acupuncture </ListItem>
            <ListItem sx={{ display: 'list-item' }}>Check-ups</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Vaccinations</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Care plans</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Family planning</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Worker’s Compensation</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Ear syringing</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Pregnancy tests</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Counselling</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Wound care & dressing</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Nutritional advice</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Sports medicine</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Skin checks</ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
    )
  }
  export default Appointments;
  