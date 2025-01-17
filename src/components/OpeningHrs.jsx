import {Table, TableBody, TableCell, TableRow, Typography} from '@mui/material';

function OpeningHrs() {
  
  return (
    <>
      <Table sx={{color: 'black'}}>
        <TableBody>
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
            <TableCell align="left" sx={{fontWeight: 'bold'}}>Sunday*</TableCell>
            <TableCell align="left">9am-11:30am</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant='body2' sx={{paddingTop: '20px', color: 'error.main'}}>* We are closed on the first and last Sundays of each month </Typography>
      <Typography variant='body2' sx={{paddingTop: '10px',}}>For care outside of normal opening hours, call </Typography>
      <Typography variant='body2' sx={{fontWeight: 'bold'}}>Sydney Medical Service: 1300 HOME GP (1300 4663 47) </Typography>
      </>
    )
  }
  export default OpeningHrs;
  