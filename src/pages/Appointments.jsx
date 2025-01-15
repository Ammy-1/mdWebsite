import { Box, Paper, List, ListItem, Typography} from '@mui/material';
import { Link } from 'react-router-dom'
import BookBtn from '../components/BookBtn';

function Appointments() {
  
  return (
      
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: 'calc(100% - 100px)', margin: '100px 0px 50px', position: 'relative', left: '50px' }}> 
      <Typography variant='h3' sx={{padding: '50px'}}> Appointments </Typography>
      <Box sx={{ display: 'flex', gap: '50px', flexGrow: 1, flexWrap: 'wrap'}}>
        <Paper sx={{padding: '20px',  display: 'flex', alignItems: 'stretch', flexDirection: 'column'}}>
          <Typography variant='h4' sx={{paddingBottom: '20px'}}> Making an Appointment </Typography>
          <Typography variant='body1' sx={{color: '#11225A', marginBottom: '10px', fontWeight: 'bold'}} > Please ring 9792 6655 or click the button below to book an appointment via HotDoc.</Typography>
          <Typography sx={{marginBottom: '10px'}}>Every effort will be made to accomodate your preferred time. Emergencies will always be given priority and our reception staff will attempt to contact you if there is any unforseen delay. Longer consultations are avaliable, so please ask our receptionists if you require some extra time. If you or a family member requires an interpreter service, let us know so we can organise this for you.</Typography>
          <Typography sx={{marginBottom: '20px', color: 'error.main'}}>Please be aware that certain appointments/services have an attached fee. <Typography sx={{paddingLeft: '5px'}}  component={Link} to='/services/fees'>Learn More</Typography></Typography>

          <BookBtn size='medium'/>
        </Paper>
      <Box sx={{ display: 'flex', alignItems: 'stretch', gap: '30px', justifyContent: 'space-between', flexDirection: 'column', width: '50%', flexGrow: 2}}>

          <Paper sx={{padding: '20px'}}>
            <Typography variant='h5' sx={{paddingBottom: '20px'}}> Telephone Access </Typography>
            <Typography variant='body1' > GPs in the practice can be contacted during normal opening hours. If the the GP is with a patient, the reception staff will take your message and give you a timeframe for when the GP would be able to return your call. In an emergency, your call will always be put through to a GP.</Typography>
          </Paper>

          <Paper sx={{padding: '20px'}}>
            <Typography variant='h5' sx={{paddingBottom: '20px'}}> Getting the Results of Tests and Procedures </Typography>
            <Typography variant='body1'>We will contact you when your results arrive at the practice. Please book a follow up appointment with your doctor to discuss your results and, if needed, plan the next steps in your care.</Typography>
          </Paper>

          <Paper sx={{padding: '20px'}}>
            <Typography variant='h5' sx={{paddingBottom: '20px'}}> Home Visits </Typography>
            <Typography variant='body1'>Home visits are only avaliable for regular patients of this practice whose conditions prevents them from visiting the surgery. These visits are subject to the GP's discretion.</Typography>
          </Paper>
        </Box>
       
        <Paper sx={{display: 'flex', flexGrow: 1, flexDirection: 'column', padding: '20px'}}>
          <Typography variant='h5' sx={{paddingBottom: '10px', position: 'relative', left: '10px', textWrap: 'wrap'}}> Services </Typography>
            <List sx={{ listStyleType: 'disc', color: 'black', position: 'relative', left: '20px' }} dense={false}>
              <ListItem sx={{ display: 'list-item'}}>Acupuncture </ListItem>
              <ListItem sx={{ display: 'list-item' }}>Check-ups</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Vaccinations</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Care plans</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Family planning</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Worker’s Compensation</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Pregnancy tests</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Counselling</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Minor surgery  
                <Typography variant='body2'>(eg. stitching cuts, ear cleans, etc.)</Typography>
              </ListItem>
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
  