import { Box, Stack, Typography } from "@mui/material"
import HorizontalScrollbar from "../horizontalscrollbar/HorizontalScrollBar"
import Loading from "../loading/Loading"


const SimilarExercises = ({ targetMuscleData, equipmentData }) => {

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
        <Stack direction='row' sx={{ p: '2px', position: 'relative' }}>
          {targetMuscleData.length ?
            <HorizontalScrollbar data={targetMuscleData} />
            : <Loading />}
        </Stack>
      </Typography>
      <Typography variant='h3' mb={5}>
        Exercises that use the same equipment
        <Stack direction='row' sx={{ p: '2px', position: 'relative' }}>
          {equipmentData.length ?
            <HorizontalScrollbar data={equipmentData} />
            : <Loading />}
        </Stack>
      </Typography>
    </Box>
  )
}

export default SimilarExercises