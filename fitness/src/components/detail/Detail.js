import { Typography, Stack, Button } from "@mui/material"

import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'


const Detail = ({ exerciseDetail }) => {

  console.log(exerciseDetail)

  const { gifUrl, name, bodyPart, equipment, target } = exerciseDetail

  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img className="detail-image" src={gifUrl} alt={name} loading='lazy' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h3'>
          <b>{name}</b>
        </Typography>
        <Typography variant='h6'>
          Exercises improve your muscle strength and boost your endurance. {" "}
          <i>{name}</i> is one of the best exercise to target your <b>{target}</b>.
          It will help deliver oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.
          And when your heart and lung health improve, you have more energy to tackle daily chores.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail