import {  Typography, Box } from '@mui/material';
import notifs from '../notifsMaster.json';
import NotifCard from '../components/NotifCard';

function Notices() {
  
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '100px', }}>
        <Box sx={{backgroundColor: (theme) => theme.palette.error.main, color: 'white', padding: '30px 0px', width: '100vw',  display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Typography variant='h2'> Notices </Typography>
          <Typography variant='body1'>Stay up to date with MDplus Clinic.</Typography>
         
        </Box>
        <Box sx={{minHeight: '50vh', width: '80vw', padding: '50px 0px'}}>
          {(notifs.length > 0) ? (
                notifs.map((notif, index) => (<NotifCard key={index} date={notif.date} heading={notif.heading} content={notif.content}/>))
              ) : (
                <Typography variant='body1' 
                  sx={{}}>
                   No notices yet
                </Typography>
                )}
        </Box>
      </Box>
      )
    }
  export default Notices;
  