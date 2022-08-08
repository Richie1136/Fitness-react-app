import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import Detail from "../detail/Detail"
import ExerciseVideos from "../exercisevideos/ExerciseVideos"
import SimilarExercises from "../similarexercises/SimilarExercises"

import { fetchData, exerciseOptions, baseURL, baseYoutubeURL } from '../../utils/fetchData'

const ExcerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {

      const exerciseDetailData = await fetchData(`${baseURL}/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
    }
    fetchExercisesData()
  }, [id])


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExcerciseDetail