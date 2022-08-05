import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import Detail from "../detail/Detail"
import ExerciseVideos from "../exercisevideos/ExerciseVideos"
import SimilarExercises from "../similarexercises/SimilarExercises"

import { fetchData, exerciseOptions, baseURL } from '../../utils/fetchData'

const ExcerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExcerciseDetail