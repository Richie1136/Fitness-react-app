import { useEffect, useState } from "react"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { fetchData, exerciseOptions, baseURL } from "../../utils/fetchData"


const SearchExercises = () => {

  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  const handleClick = async () => {
    if (search) {
      const exercisesData = await fetchData(`${baseURL}`, exerciseOptions)
      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p='20px'>
      <Typography fontWeight="700" sx={{ 'fontSize': { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            'input': { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={handleChange}
          placeholder="Search Exercises"
          type="text" />
        <Button sx={{
          'backgroundColor': '#ff2625', 'color': '#fff', 'textTransform': 'none',
          'width': { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' }, 'height': '56px', 'position': 'absolute', 'right': '0'
        }}
          className="search-btn" onClick={handleClick}>Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises