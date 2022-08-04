import { useState } from "react"
import { Box } from "@mui/material"
import HeroBanner from "../herobanner/HeroBanner"
import SearchExercises from "../searchexercises/SearchExercises"
import Excerises from "../excerises/Excerises"

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Excerises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home