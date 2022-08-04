import { Stack, Typography } from "@mui/material"
import Icon from '../../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack className="bodyPart-card" type="button" alignItems="center" justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        'backgroundColor': '#fff',
        'borderBottomLeftRadius': '20px',
        'width': '270px',
        'height': '280px',
        'cursor': 'pointer',
        'gap': '47px',
      }}
    >
      <img style={{ 'width': '40px', 'height': '40px' }} src={Icon} alt='icon' />
      <Typography fontSize="24px" fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart