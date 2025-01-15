import {Table, TableCell, TableHead, TableRow, Typography} from '@mui/material';

function OpeningHrs() {
  
  return (
    <>
      <Table sx={{color: 'black'}}>
        <TableHead>
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
        </TableHead>
      </Table>
      <Typography variant='body2' sx={{paddingTop: '20px', color: 'error.main'}}>* We are closed on the first and last Sundays of each month </Typography>
    </>
    )
  }
  export default OpeningHrs;
  