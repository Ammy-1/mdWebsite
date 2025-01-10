import { Button } from '@mui/material'

function BookBtn({size}) {
  
  return (
    <Button 
        variant='contained'
        color='error' 
        size={size} 
        href="https://www.hotdoc.com.au/medical-centres/padstow-NSW-2211/md-plus-clinic/doctors/dr-tam-pham?wp=w_lightbox"
        title="Book medical appointments with Dr Tam Pham at MD Plus Clinic in Padstow NSW 2211, through HotDoc"
        target="_blank"
        sx={{
        color: 'white', 
        textDecoration: 'none', 
        '&:visited': {color: 'white'},
        '&:focus': {outline: 'none'},
        }}>
        Book Appointment
    </Button>
    )
  }
export default BookBtn;
