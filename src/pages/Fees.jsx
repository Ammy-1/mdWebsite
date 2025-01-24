import { Box, Paper, Table, TableHead, TableRow, TableCell, Typography, Stack, TableBody} from '@mui/material';
import { AccountBalanceWallet, PointOfSale, } from '@mui/icons-material';
import fees from '../dataMasters/feesMaster.json';

function Fees() {
  
  const cell = {
    [`@media (max-width: 600px)`]: {
      wordWrap: 'break-word', 
      padding: 0
    }
  }
  
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
      <Typography variant='h3' sx={{padding: '60px'}}> Fees </Typography>
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
              <AccountBalanceWallet sx={{width: '50px', height: 'auto', position: 'relative', bottom: '10px'}}/>
              <Typography variant='h4' sx={{paddingBottom: '20px'}}> Fees and Billing Arrangements </Typography>
            </Stack>
         
          <Typography sx={{marginBottom: '10px',  textWrap: 'wrap'}}>
          Fees are payable at the time of consultation. On Sundays, this practice bulk bills children under 16 yrs old, pensioners, Health Care card holders and veterans. Non-bulk billing consultations have a gap fee of $25 (standard consultation), $30 (long consultation) or $35 (prolonged consultation). 
          </Typography>
          <Typography sx={{marginBottom: '10px', fontWeight: 'bold'}}>
            If you have any difficulties with paying our fees, please discuss it with us.
          </Typography>
        </Paper>
        <Box
          sx={{ 
            display: 'flex',
            alignItems: 'stretch', 
            gap: '30px', 
            justifyContent: 'space-between', 
            flexDirection: 'column', 
            width: '50%', 
            flexGrow: 2
          }}
        >
            <Paper sx={{padding: '30px'}}>
              <Stack direction='row' gap='10px'>
                <PointOfSale sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
                <Typography variant='h5' sx={{paddingBottom: '20px'}}> Fees and Cost Breakdown </Typography>
              </Stack>

            <Box 
              sx={{
                maxHeight: '1100px', 
                overflowY: 'auto', 
                overflowX: 'auto', 
                width: 'inherit'
              }}
            >
              <Table stickyHeader dense='true' sx={{tableLayout: 'fixed', width: '100%',}} >
                <TableHead >
                  <TableRow >
                    <TableCell 
                      className='fee-cell' 
                      align="left" 
                      sx={{
                        fontWeight: 'bold',
                        backgroundColor: '#11225A', 
                        color: 'white' 
                        }}
                    >
                      Item
                    </TableCell>

                    <TableCell
                      className='fee-cell' 
                      align="left" 
                      sx={{
                        ...cell, 
                        fontWeight: 'bold', 
                        backgroundColor: '#11225A',
                        color: 'white'
                      }}
                    >
                      Description
                    </TableCell>

                    <TableCell 
                      className='fee-cell' 
                      align="left" 
                      sx={{
                        fontWeight: 'bold', 
                        backgroundColor: '#11225A', 
                        color: 'white'
                      }}
                    >
                      Fee
                    </TableCell>
                    
                    <TableCell 
                      className='fee-cell' 
                      align="left" 
                      sx={{
                        fontWeight: 'bold',
                        backgroundColor: '#11225A', 
                        color: 'white'
                      }}
                    >
                      Medicare Rebate
                    </TableCell>

                    <TableCell 
                      className='fee-cell' 
                      align="left" 
                      sx={{
                        fontWeight: 'bold', 
                        backgroundColor: '#11225A', 
                        color: 'white'
                      }}
                    >
                      Out of Pocket Cost
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { fees.map((feeItem, index) => (
                    <TableRow key={index}>
                      <TableCell className='fee-cell' align="left">{feeItem.item}</TableCell>
                      <TableCell className='fee-cell' align="left">{feeItem.description}</TableCell>
                      <TableCell className='fee-cell' align="left">{feeItem.fee}</TableCell>
                      <TableCell className='fee-cell' align="left">{feeItem.rebate}</TableCell>
                      <TableCell className='fee-cell' align="left">{feeItem.cost}</TableCell>
                  </TableRow>
                  ))}
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
  