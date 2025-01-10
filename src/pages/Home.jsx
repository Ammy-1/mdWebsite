import { AppBar, Toolbar, Typography, Button, Tabs, Tab, Divider, Box, CardMedia, List, ListItem, TableRow, TableCell, Table, Paper, Card } from '@mui/material';


function Home() {

  
  return (
    <>
      <Box sx={{backgroundColor: '#ddd', width: '100vw', height: '400px', marginTop: '100px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexGrow: '1'}}> 
        <Box sx={{ width: '50%', height:'inherit', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end' }}>
          <Typography variant='h3' sx={{color: '#000'}}>Welcome to</Typography>
          <Typography variant='h2' sx={{color: '#000'}}>MDplus Clinic</Typography>
        </Box>

        <Box sx={{width: '40%',  height:'inherit', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Button variant='contained' color='error' size='large'> Book Appointment</Button>
        </Box>
      
      </Box>

      <Box sx={{backgroundColor: '#F2F2F2', width: '100vw', height: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'flex-start', paddingTop: '60px'}}> 
        <Typography variant='h6' sx={{color: '#000', fontWeight: 'bold'}}>
            At MDPlus Clinic, we are committed to providing high quality care for all of our patients.
        </Typography>

        <Typography variant='body1' sx={{color: '#000', maxWidth: '890px', paddingTop: '30px'}}>
          Dr Tam Pham has over 25 years experience in all aspects of general practice, specialising in paediatrics, sports medicine and men’s health. Appointments can be made either through phone bookings to (02) 9792 6655 or our website.
        </Typography>
        
        <img src="./AGPAL Accredited Symbol_PNG.png" alt="AGPAL accreditation" style={{width: '385px', marginTop: '30px'}}/>
        <Typography variant='body2' sx={{color: '#11225A', fontWeight: 'bold'}}>
          MDPlus Clinic is an AGPAL accredited Medical Centre.  
        </Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', marginBottom: '20px' }}>
        <Paper sx={{backgroundColor: 'white', flexGrow: 2, marginTop: '50px', display: 'flex', gap: '50px', alignItems: 'center', width: '80vw',}}>
            <Typography variant='h3' sx={{color: '#000', padding: '40px'}}>Services</Typography>
            <Divider orientation='vertical' flexItem/>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: '1', padding: '20px'}}>
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
        <Paper sx={{backgroundColor: 'white', display: 'flex', flexGrow: 1, flexDirection: 'column', padding: '50px'}}>
            <Typography variant='h3' sx={{color: '#000', paddingBottom: '20px'}}>Opening Hours</Typography>
            <Table sx={{color: 'black'}}>
              <TableRow>
                <TableCell align="left">Monday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Tuesday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Wednesday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Thursday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Friday</TableCell>
                <TableCell align="left">8:30am-6pm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Saturday</TableCell>
                <TableCell align="left">Closed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Sunday</TableCell>
                <TableCell align="left">9am-11:30am*</TableCell>
              </TableRow>
            </Table>
          <Typography variant='body2' sx={{paddingTop: '20px'}}>* We are closed on the first and last Sundays of each month </Typography>
          </Paper>

          <Paper sx={{backgroundColor: 'white', display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
            <Typography variant='h3'>News</Typography>
            <Card>sdad</Card>
            <Card>asdasd</Card>
            <Button variant='outlined'>View All</Button>
          </Paper>
      </Box>
    </Box>

      




    

      
    </>
    )
  }
  
  export default Home