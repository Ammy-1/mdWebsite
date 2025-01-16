import {  Typography, Box, Card, Stack } from '@mui/material';
import notifs from '../notifsMaster.json';
import NotifCard from '../components/NotifCard';
import { Announcement } from '@mui/icons-material';

function Notices() {
  
    return (
      <Box sx={{ display: 'flex',  flexDirection: 'column', marginTop: '100px', }}>
        <Box sx={{backgroundColor: 'error.main', color: 'white', padding: '50px 0px', width: '100vw',  display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
         
          <Stack direction='row' gap='20px'>
              <Announcement sx={{width: '50px', height: 'auto', position: 'relative', bottom: '0px'}}/>
              <Typography variant='h3'> Notices </Typography>
            </Stack>
          <Typography variant='body1'>Stay up to date with MDplus Clinic.</Typography>
         
        </Box>
        <Box sx={{minHeight: '45vh', width: 'calc(100% - 100px)', padding: '50px 0px', position: 'relative', left: '50px' }}>
          {(notifs.length > 0) ? (
                notifs.map((notif, index) => (<NotifCard key={index} date={notif.date} heading={notif.heading} content={notif.content}/>))
              ) : (
                <Card variant='outlined'
                  sx={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)', 
                    textAlign: 'center', 
                    width: '100%', 
                    padding: '20px 0px'}}>
                    No notices yet
                </Card>
                )}
        </Box>
      </Box>
      )
    }
  export default Notices;
  