import { Box, Stack, Typography } from "@mui/material"
import Logo from '../../assets/images/exerciseLogo.jpeg'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor="#fff3f4">
      <Stack gap='40px' alignItems="center" px='40px' pt='24px'>
        <img style={{ height: '200px', width: '200px' }} src={Logo} alt='footer logo' />
        <Typography variant='h5' pb='40px' mt='20px'>
          © Created by Richard Hagenah 2022
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer