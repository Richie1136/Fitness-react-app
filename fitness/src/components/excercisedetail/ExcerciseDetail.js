import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import Detail from "../detail/Detail"
import ExerciseVideos from "../exercisevideos/ExerciseVideos"
import SimilarExercises from "../similarexercises/SimilarExercises"

import { fetchData, exerciseOptions, baseURL, baseYoutubeURL, videoOptions } from '../../utils/fetchData'

const ExcerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleData, setTargetMuscleData] = useState([])
  const [equipmentData, setEquipmentData] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {

      const exerciseDetailData = await fetchData(`${baseURL}/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      const exerciseVideosData = await fetchData(`${baseYoutubeURL}/search?query=${exerciseDetail.name} exercises`, videoOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleexerciseData = await fetchData(`${baseURL}/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleData(targetMuscleexerciseData)

      const equipmentExerciseData = await fetchData(`${baseURL}/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentData(equipmentExerciseData)

    }
    fetchExercisesData()
  }, [id])


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleData={targetMuscleData} equipmentData={equipmentData} />
    </Box>
  )
}

export default ExcerciseDetail