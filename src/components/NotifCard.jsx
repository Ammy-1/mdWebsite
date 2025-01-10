import { Card, Typography } from '@mui/material'

function NotifCard({date, heading, content}) {
  
  return (
    <Card variant='outlined' sx={{padding: '20px', margin: '5px'}}>
        <Typography variant='caption'>{date}</Typography>
        <Typography variant='h6'>{heading}</Typography>
        <Typography variant='body2'>{content}</Typography>
    </Card>
    )
  }
export default NotifCard;
