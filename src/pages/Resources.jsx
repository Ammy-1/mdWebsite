import { Box, Paper, Typography, Stack, Table, TableCell, TableBody, TableHead, TableRow, Link} from '@mui/material';
import { Info } from '@mui/icons-material';

function Resources() {
  const cellText = {
    ['@media (max-width: 600px)']: {
        fontSize: '0.56rem'
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: 'calc(100% - 100px)', margin: '100px 0px 50px', position: 'relative', left: '50px' }}> 
    <Typography variant='h3' sx={{padding: '60px'}}> Resources </Typography>
    <Box sx={{ display: 'flex', gap: '50px', flexGrow: 1, flexWrap: 'wrap'}}>
      <Box sx={{ display: 'flex', alignItems: 'stretch', gap: '30px', justifyContent: 'space-between', flexDirection: 'column', width: '50%', flexGrow: 2}}>

        <Paper sx={{padding: '30px'}}>
          <Stack direction='row' gap='10px'>
            <Info sx={{width: '30px', height: 'auto', position: 'relative', bottom: '10px'}}/>
            <Typography variant='h5' sx={{paddingBottom: '20px'}}> Links and Resources </Typography>
          </Stack>

          <Box sx={{maxHeight: '1100px', overflowY: 'auto', overflowX: 'auto', width: 'inherit'}}>
            <Table stickyHeader dense='true' sx={{tableLayout: 'fixed', width: '100%',}} >
              <TableHead >
                <TableRow >
                  <TableCell className='fee-cell' align="left" sx={{fontWeight: 'bold' , backgroundColor: '#11225A', color: 'white' }}>Resource</TableCell>
                  <TableCell className='fee-cell' align="left" sx={{fontWeight: 'bold', backgroundColor: '#11225A', color: 'white'}}>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className='fee-cell' align="left" sx={{fontWeight: 'bold'}}>National Diabetes Services Scheme (NDSS)
                    <Typography variant='body2' sx={cellText}> NDSS is a government led initiative that provides information and support services to people with diabetes.</Typography>
                  </TableCell>
                  <TableCell className='fee-cell' align="left">
                    <Link>https://www.ndss.com.au/</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='fee-cell' align="left" sx={{fontWeight: 'bold'}}>National Relay Service (NRS)
                    <Typography sx={cellText} variant='body2'> NRS assists individuals who are deaf or have difficulty speaking or hearing make phone call.</Typography>
                    <Link sx={cellText} variant='body2' href='https://www.accesshub.gov.au/about-the-nrs'>Learn more</Link>
                  </TableCell>
                  <TableCell className='fee-cell' align="left">
                    <Link>https://www.accesshub.gov.au/about-the-nrs/nrs-call-numbers-and-links</Link>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className='fee-cell' align="left" sx={{fontWeight: 'bold'}}>Translating and Interpreting Service (TIS National)
                    <Typography variant='body2' sx={cellText}>TIS National is a interpreting service for non-English or limited English speakers. </Typography>
                  </TableCell>
                  <TableCell className='fee-cell' align="left">
                    <Link>https://www.tisnational.gov.au/</Link>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className='fee-cell' align="left" sx={{fontWeight: 'bold'}}>Sydney Medical Service Co-op (Sydmed)
                    <Typography variant='body2' sx={cellText}>Sydmed is a non-profit co-op that provides after hours bulk-billed home visits/appointments.</Typography>
                  </TableCell>
                  <TableCell className='fee-cell' align="left">
                    <Link>https://www.sydmed.com.au/</Link>
                  </TableCell>
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
  export default Resources;