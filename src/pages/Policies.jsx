import { Box, Paper, Typography, Stack} from '@mui/material';
import { Link } from 'react-router-dom'
import { Campaign, Notifications, SmokeFreeRounded, MedicalInformation } from '@mui/icons-material';

function Policies() {
  
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
      <Typography variant='h3' sx={{padding: '60px'}}> Policies </Typography>
      <Box sx={{ display: 'flex', gap: '50px', flexWrap: 'wrap'}}>
        <Paper 
          sx={{
            padding: '30px',  
            display: 'flex', 
            alignItems: 'stretch', 
            flexDirection: 'column', 
            flexGrow: 1
          }}
        >
          <Stack direction='row' gap='10px'>
              <MedicalInformation sx={{width: '50px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h4' sx={{paddingBottom: '20px'}}> Management of Your Personal Health Information </Typography>
            </Stack>
         
          <Typography sx={{marginBottom: '20px'}}>
            Your medical record is a confidential document. It is this practice&apos;s policy to maintain the security of personal health information at all times and to ensure that this information is only avaliable to authorised members of staff. 
          </Typography>
          <Typography>
            We abide by the 10 Nation Privacy Principles avaliable at: 
            <span><Link> www.privacy.gov.au/health/index.html</Link></span>
          </Typography>
        </Paper>

      <Box 
        sx={{
          display: 'flex', 
          flexDirection: 'row', 
          gap: '50px', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap'
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'stretch', 
            gap: '30px', 
            justifyContent: 'space-between', 
            flexDirection: 'column', 
            flexGrow: 1, 
            width: '50%' 
          }}
        >
          <Paper sx={{padding: '30px 40px'}}>
            <Stack direction='row' gap='10px'>
              <Notifications sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h5' sx={{paddingBottom: '20px'}}> Reminder System </Typography>
            </Stack>
            <Typography variant='body1' sx={{marginBottom: '20px'}}> 
              Our practice is commited to preventative care. Your doctor will seek your permission to be included on our reminder system. We may issue you with a reminder notice from time to time, offering you preventative health services appropriate to your care.
            </Typography>
            <Typography variant='body1' sx={{fontWeight: 'bold'}}>
              If you do not wish to be part of this system, please let your doctor or the reception staff know.
            </Typography>
          </Paper>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '30px', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            flexGrow: 1
          }}
        >
          <Paper sx={{padding: '30px 40px',  flexGrow: 1}}>
            <Stack direction='row' gap='10px'>
              <SmokeFreeRounded sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h5' sx={{paddingBottom: '20px'}}> Smoking Policy </Typography>
            </Stack>
            <Typography variant='body1'>This practice has a no smoking policy.</Typography>
          </Paper>

          <Paper sx={{padding: '30px 40px',  flexGrow: 1}}>
            <Stack direction='row' gap='10px'>
              <Campaign sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h5' sx={{paddingBottom: '20px'}}> Your Rights </Typography>
            </Stack>
              <Typography sx={{fontWeight: 'bold'}} variant='body1'>If you have a problem, we would like to hear about it.</Typography>
              <Typography sx={{fontWeight: 'bold'}} variant='body1'>Please feel free to talk to your GP or our receptionists.</Typography>
              
              <Typography variant='body2' sx={{padding: '10px 0px'}}>You can let us know using our suggestion box in the clinic reception.</Typography>
          </Paper>
          
         
              
          </Box>
        </Box>
      </Box>
    </Box>
    )
  }
  export default Policies;
  