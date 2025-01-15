import {Typography, Button, Divider, Box, List, ListItem, Paper } from '@mui/material';
import BookBtn from '../components/BookBtn';
import NotifCard from '../components/NotifCard';
import notifs from '../notifsMaster.json';
import {Link} from 'react-router-dom';
import OpeningHrs from '../components/OpeningHrs';


function Home() {
  
  return (
    <>
      <Box sx={{backgroundColor: '#ddd', width: '100vw', height: '400px', marginTop: '100px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexGrow: '1'}}> 
        <Box sx={{ width: '50%', height:'inherit', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end' }}>
          <Typography variant='h3' sx={{color: '#000'}}>Welcome to</Typography>
          <Typography variant='h2' sx={{color: '#000'}}>MDplus Clinic</Typography>
        </Box>

        <Box sx={{width: '40%',  height:'inherit', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
          <BookBtn size='large'/>
        </Box>
       
      </Box>

      

      <Box sx={{ width: '100vw', height: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'flex-start', paddingTop: '70px'}}> 
        <Typography variant='h6' sx={{color: '#11225A', fontWeight: 'bold'}}>
            At MDPlus Clinic, we are committed to providing high quality care for all of our patients.
        </Typography>

        <Typography variant='body1' sx={{color: '#000', maxWidth: '890px', padding: '30px 0px 30px'}}>
          Dr Tam Pham has over 25 years experience in all aspects of general practice, specialising in paediatrics, sports medicine and men’s health. Appointments can be made either through phone bookings to <span style={{color: '#d32f2f'}}>(02) 9792 6655 </span>or our website.
        </Typography>
        
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Paper elevation={5}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6619.130184179823!2d151.03154179999999!3d-33.952312299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bec4474e049d%3A0x8d124e5d6cbab8bd!2sMDPlus%20Medical%20Clinic%20Padstow!5e0!3m2!1sen!2sau!4v1736653520410!5m2!1sen!2sau"
              width="375" 
              height="300"  
              loading="lazy" 
            />
          </Paper>

          <Box sx={{textAlign: 'end'}}>
            <img src="./AGPAL Accredited Symbol_PNG.png" alt="AGPAL accreditation" style={{width: '385px', marginTop: '30px'}}/>
            <Typography variant='body2' sx={{color: '#11225A', fontWeight: 'bold'}}>
              MDPlus Clinic is an AGPAL accredited Medical Centre.  
            </Typography>
          </Box>
  
        </Box>
       
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', marginBottom: '50px' }}>
        <Paper elevation={10} sx={{backgroundColor: 'white', flexGrow: 2, marginTop: '50px', display: 'flex', gap: '50px', alignItems: 'center', width: '80vw',}}>
            <Typography variant='h3' sx={{color: '#000', padding: '40px'}}>Services</Typography>
            <Divider orientation='vertical' flexItem/>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: '1', padding: '20px 20px 20px 0px', }}>
              <Typography variant='h6' sx={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>
                Services available at this medical centre include:
              </Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-evenly', padding: '20px'}}>
                <List sx={{ listStyleType: 'disc', color: 'black'}} dense={true}>
                  <ListItem sx={{ display: 'list-item'}}>Acupuncture </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Check-ups</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Vaccinations</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Care plans</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Family planning</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Worker’s Compensation</ListItem>
                </List>

                <List sx={{ listStyleType: 'disc', color: 'black'}} dense={true}>
                  <ListItem sx={{ display: 'list-item' }}>Pregnancy tests</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Counselling</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Minor surgery</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Nutritional advice</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Sports medicine</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Skin checks</ListItem>
                </List>
              </Box>
              <Button variant='contained' color='error'>Learn More</Button>
            </Box>
          </Paper>
          
        <Box sx={{display: 'flex', gap: '50px', width: '80vw', flexGrow: 1}}>
        <Paper elevation={10} sx={{backgroundColor: 'white', display: 'flex', flexGrow: 1, flexDirection: 'column', padding: '50px', width: '20%'}}>
            <Typography variant='h3' sx={{color: '#000', paddingBottom: '20px'}}>Opening Hours</Typography>
            <OpeningHrs/>
          </Paper>

          <Paper elevation={10} sx={{backgroundColor: 'white', display: 'flex', flexGrow: 1, flexDirection: 'column', padding: '50px' }}>
            <Typography variant='h3' sx={{marginBottom: '20px'}}>Notices</Typography>
            <Box sx={{ height: '60vh', overflow: 'auto', bgcolor: 'whitesmoke'}} boxShadow={5}>
              {(notifs.length > 0) ? (
                notifs.map((notif, index) => (<NotifCard key={index} date={notif.date} heading={notif.heading} content={notif.content}/>))
              ) : (
                <Typography variant='body1' 
                  sx={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-15%, -50%)',}}>
                   No notices yet
                </Typography>
                )}
            </Box>
           
            
            
            <Button variant='outlined' sx={{marginTop: '20px'}} component={Link} to='/notices'>View All</Button>
          </Paper>
      </Box>
    </Box>

      




    

      
    </>
    )
  }
  
  export default Home