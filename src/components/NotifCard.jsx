import { Card, Typography } from '@mui/material'

function NotifCard({date, heading, content}) {
  
  return (
    <Card variant='outlined' sx={{padding: '20px', margin: '5px'}}>
        <Typography variant='caption' color='text.secondary'>{date}</Typography>
        <Typography variant='h6' sx={{color: '#11225A'}}>{heading}</Typography>
        <Typography variant='body2'>{content}</Typography>
    </Card>
    )
  }
export default NotifCard;
