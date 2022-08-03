import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../../assets/images/Logo2.png'

const NavBar = () => {
  return (
    <Stack>
      <NavLink to='/'>
        <img src={Logo} alt='logo' style={{ width: '48px', height: '48px', margin: '0 20px' }} />
      </NavLink>
      <Stack>
        <NavLink style={{ 'textDecoration': 'none', 'color': '#3A1212', 'borderBottom': '3px solid #FF2625' }} to='/home'>
          <span>Home</span>
        </NavLink>
        <a href="#exercises" style={{ 'textDecoration': 'none', 'color': '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default NavBar