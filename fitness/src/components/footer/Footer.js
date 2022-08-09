import { Box, Stack, Typography } from "@mui/material"
import Logo from '../../assets/images/exerciseLogo.jpeg'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor="#fff3f4">
      <Stack gap='40px' alignItems="center" px='40px' pt='24px'>
        <img style={{ height: '140px', width: '140px' }} src={Logo} />
      </Stack>
    </Box>
  )
}

export default Footer