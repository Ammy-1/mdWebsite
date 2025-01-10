import {Typography, Button, Divider, Box, List, ListItem, TableRow, TableCell, Table, Paper } from '@mui/material';
import BookBtn from '../components/BookBtn';
import NotifCard from '../components/NotifCard';
import notifs from '../notifsMaster.json'


function Home() {
    console.log(notifs.length);
  
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

      

      <Box sx={{backgroundColor: '#F2F2F2', width: '100vw', height: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'flex-start', paddingTop: '60px'}}> 
        <Typography variant='h6' sx={{color: '#000', fontWeight: 'bold'}}>
            At MDPlus Clinic, we are committed to providing high quality care for all of our patients.
        </Typography>

        <Typography variant='body1' sx={{color: '#000', maxWidth: '890px', padding: '30px 0px 30px'}}>
          Dr Tam Pham has over 25 years experience in all aspects of general practice, specialising in paediatrics, sports medicine and men’s health. Appointments can be made either through phone bookings to <span style={{color: 'red'}}>(02) 9792 6655 </span>or our website.
        </Typography>
        
        <Box>
          <img src="./AGPAL Accredited Symbol_PNG.png" alt="AGPAL accreditation" style={{width: '385px', marginTop: '30px'}}/>
          <Typography variant='body2' sx={{color: '#11225A', fontWeight: 'bold'}}>
            MDPlus Clinic is an AGPAL accredited Medical Centre.  
          </Typography>
        </Box>
       
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', marginBottom: '50px' }}>
        <Paper sx={{backgroundColor: 'white', flexGrow: 2, marginTop: '50px', display: 'flex', gap: '50px', alignItems: 'center', width: '80vw',}}>
            <Typography variant='h3' sx={{color: '#000', padding: '40px'}}>Services</Typography>
            <Divider orientation='vertical' flexItem/>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: '1', padding: '20px 20px 20px 0px', }}>
              <Typography variant='h6' sx={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>
                Services available at this medical centre include:
              </Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-evenly', padding: '20px'}}>
                <List sx={{ listStyleType: 'disc', color: 'black'}} dense>
                  <ListItem sx={{ display: 'list-item'}}>Acupuncture </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Check-ups</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Vaccinations</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Care plans</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Family planning</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Worker’s Compensation</ListItem>
                </List>

                <List sx={{ listStyleType: 'disc', color: 'black'}} dense>
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
        <Paper sx={{backgroundColor: 'white', display: 'flex', flexGrow: 1, flexDirection: 'column', padding: '50px', width: '20%'}}>
            <Typography variant='h3' sx={{color: '#000', paddingBottom: '20px'}}>Opening Hours</Typography>
            <Table sx={{color: 'black'}}>
              <TableRow>
                <TableCell align="left" sx={{fontWeight: 'bold'}}>Monday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontWeight: 'bold'}}>Tuesday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontWeight: 'bold'}}>Wednesday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontWeight: 'bold'}}>Thursday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontWeight: 'bold'}}>Friday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontWeight: 'bold'}}>Saturday</TableCell>
                <TableCell align="left">Closed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontWeight: 'bold'}}>Sunday</TableCell>
                <TableCell align="left">9am-11:30am*</TableCell>
              </TableRow>
            </Table>
          <Typography variant='body2' sx={{paddingTop: '20px'}}>* We are closed on the first and last Sundays of each month </Typography>
          </Paper>

          <Paper sx={{backgroundColor: 'white', display: 'flex', flexGrow: 1, flexDirection: 'column', padding: '50px', overflow: 'clip'}}>
            <Typography variant='h3' sx={{marginBottom: '20px'}}>News</Typography>
            {(notifs.length > 0) ? (
              notifs.map((notif, index) => (<NotifCard key={index} date={notif.date} heading={notif.heading} content={notif.content}/>))
            ) : (
              <Typography variant='body1'> No news yet</Typography>
            )}
           
            
            
            <Button variant='outlined' sx={{marginTop: '20px'}}>View All</Button>
          </Paper>
      </Box>
    </Box>

      




    

      
    </>
    )
  }
  
  export default Home