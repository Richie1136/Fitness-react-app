import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import ExerciseDetail from './components/exercisedetail/ExerciseDetail';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
