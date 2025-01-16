import { Box, Paper, Table, TableHead, TableRow, TableCell, Typography, Stack, TableBody, TableContainer} from '@mui/material';
import { AccountBalanceWallet, PointOfSale, } from '@mui/icons-material';

function Fees() {
  
  const cell = {
    [`@media (max-width: 600px)`]: {
      wordWrap: 'break-word', 
      padding: 0
    },
   
  }
  
  return (
      
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: 'calc(100% - 100px)', margin: '100px 0px 50px', position: 'relative', left: '50px' }}> 
      <Typography variant='h3' sx={{padding: '60px'}}> Fees </Typography>
      <Box sx={{ display: 'flex', gap: '50px', flexGrow: 1, flexWrap: 'wrap'}}>
        <Paper sx={{padding: '30px',  display: 'flex', alignItems: 'stretch', flexDirection: 'column'}}>
          <Stack direction='row' gap='10px'>
              <AccountBalanceWallet sx={{width: '50px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h4' sx={{paddingBottom: '20px'}}> Fees and Billing Arrangements </Typography>
            </Stack>
         
          <Typography sx={{marginBottom: '10px', textWrap: 'wrap'}}>Fees are payable at the time of consultation by cash, cheque, Mastercard or Visa. The AMA fee structure forms the basis of our billing policy and is displayed at the clinic&apos;s reception area</Typography>
          <Typography sx={{marginBottom: '10px',  textWrap: 'wrap'}}>This practice bulk bills pensioners and Health Care card holders. Veterans may sign the service voucher. Sunday appointments have a gap fee of $25 (standard consultation) or $30 (long consultation). </Typography>
          <Typography sx={{marginBottom: '10px', fontWeight: 'bold'}}>If you have any difficulties with paying our fees, please discuss it with us.</Typography>
        </Paper>
        <Box sx={{ display: 'flex', alignItems: 'stretch', gap: '30px', justifyContent: 'space-between', flexDirection: 'column', width: '50%', flexGrow: 2}}>

            <Paper sx={{padding: '30px'}}>
              <Stack direction='row' gap='10px'>
                <PointOfSale sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
                <Typography variant='h5' sx={{paddingBottom: '20px'}}> Fees and Cost Breakdown </Typography>
              </Stack>

            <Box sx={{maxHeight: '1100px', overflowY: 'auto', overflowX: 'auto', width: 'inherit'}}>
              <Table stickyHeader dense sx={{tableLayout: 'fixed', width: '100%',}} >
                <TableHead >
                  <TableRow >
                    <TableCell align="left" sx={{fontWeight: 'bold' , backgroundColor: '#11225A', color: 'white' }}>Item</TableCell>
                    <TableCell align="left" sx={{...cell, fontWeight: 'bold', backgroundColor: '#11225A', color: 'white'}}>Description</TableCell>
                    <TableCell align="left" sx={{fontWeight: 'bold', backgroundColor: '#11225A', color: 'white'}}>Fee</TableCell>
                    <TableCell align="left" sx={{fontWeight: 'bold', backgroundColor: '#11225A', color: 'white'}}>Medicare Rebate</TableCell>
                    <TableCell align="left" sx={{fontWeight: 'bold', backgroundColor: '#11225A', color: 'white'}}>Out of Pocket Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableContainer></TableContainer>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">721</TableCell>
                    <TableCell align="left">Health Care Plan (HCP)</TableCell>
                    <TableCell align="left">$204.35</TableCell>
                    <TableCell align="left">$164.35</TableCell>
                    <TableCell align="left">$40</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">732</TableCell>
                    <TableCell align="left">HCP review</TableCell>
                    <TableCell align="left">$122.10</TableCell>
                    <TableCell align="left">$82.10</TableCell>
                    <TableCell align="left">$40</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">2712</TableCell>
                    <TableCell align="left">Mental Healthcare Plan review</TableCell>
                    <TableCell align="left">$121.70</TableCell>
                    <TableCell align="left">$103.70</TableCell>
                    <TableCell align="left">$40</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">-</TableCell>
                    <TableCell align="left">Ear Syringing</TableCell>
                    <TableCell align="left">$30 for 1,  $40 for 2</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$30 for 1,  $40 for 2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">-</TableCell>
                    <TableCell align="left">Cyro Forceps</TableCell>
                    <TableCell align="left">$44</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$44</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">-</TableCell>
                    <TableCell align="left">Non-commercial Driver License</TableCell>
                    <TableCell align="left">$44</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$44</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">-</TableCell>
                    <TableCell align="left">Commercial Driver License</TableCell>
                    <TableCell align="left">$220</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$220</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">23</TableCell>
                    <TableCell align="left">New Patient (Standard Consultation)</TableCell>
                    <TableCell align="left">$89</TableCell>
                    <TableCell align="left">$59</TableCell>
                    <TableCell align="left">$30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">36</TableCell>
                    <TableCell align="left">New Patient (Extended Consultation)</TableCell>
                    <TableCell align="left">$112.90</TableCell>
                    <TableCell align="left">$82.90</TableCell>
                    <TableCell align="left">$30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">5020</TableCell>
                    <TableCell align="left">Sunday Appointment (Standard Consultation)</TableCell>
                    <TableCell align="left">$80.80</TableCell>
                    <TableCell align="left">$55.80</TableCell>
                    <TableCell align="left">$25</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">5040</TableCell>
                    <TableCell align="left">Sunday Appointment (Long Consultation)</TableCell>
                    <TableCell align="left">$125.70</TableCell>
                    <TableCell align="left">$95.70</TableCell>
                    <TableCell align="left">$30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">-</TableCell>
                    <TableCell align="left">Forms & Assessments</TableCell>
                    <TableCell align="left">$44</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$44</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">#23</TableCell>
                    <TableCell align="left">Standard Consultation (No Medicare)</TableCell>
                    <TableCell align="left">$66.60</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$66.60</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">#36</TableCell>
                    <TableCell align="left">Extended Consultation (No Medicare)</TableCell>
                    <TableCell align="left">$105</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$105</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">#44</TableCell>
                    <TableCell align="left">Long Consultation (No Medicare)</TableCell>
                    <TableCell align="left">$150</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$150</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">#5020</TableCell>
                    <TableCell align="left">Standard After-hour (No Medicare)</TableCell>
                    <TableCell align="left">$88.80</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$88.80</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">#5040</TableCell>
                    <TableCell align="left">Extended After-hour (No Medicare)</TableCell>
                    <TableCell align="left">$132</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$132</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">#5060</TableCell>
                    <TableCell align="left">Long After-hours (No Medicare)</TableCell>
                    <TableCell align="left">$178</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$178</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">DNA fee</TableCell>
                    <TableCell align="left">Late cancellation (less than 24hrs)</TableCell>
                    <TableCell align="left">$22</TableCell>
                    <TableCell align="left">$0</TableCell>
                    <TableCell align="left">$22</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
              
              
            
            </Paper>
        </Box>
      </Box>
    </Box>
  )
}
  export default Fees;
  