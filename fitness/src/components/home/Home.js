import { useState } from "react"
import { Box } from "@mui/material"
import HeroBanner from "../herobanner/HeroBanner"
import SearchExercises from "../searchexercises/SearchExercises"
import Excerises from "../excerises/Excerises"

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Excerises />
    </Box>
  )
}

export default Home