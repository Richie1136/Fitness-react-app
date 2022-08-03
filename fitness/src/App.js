import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import ExcerciseDetail from './components/excercisedetail/ExcerciseDetail';

function App() {
  return (
    <Box width="400px">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExcerciseDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
