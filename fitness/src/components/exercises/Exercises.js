import { useState, useEffect } from "react"
import { Pagination } from "@mui/material"
import { Box, Stack, Typography } from "@mui/material"
import ExerciseCard from "../exercisecard/ExerciseCard"

import { exerciseOptions, fetchData, baseURL } from "../../utils/fetchData"


const Exercises = ({ setExercises, bodyPart, exercises }) => {

  const [currentPage, setCurrentPage] = useState(1)

  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (event, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems="center">
        {exercises?.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
