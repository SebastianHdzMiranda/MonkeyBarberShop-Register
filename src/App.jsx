import './scss/app.scss'
import Form from './components/Form.jsx';
import RegisterDay from './components/RegisterDay.jsx';
import DailyTotal from './components/DailyTotal.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx';
import { addLunchTime } from './services/api.js';
import TimeTrackingForm from './components/TimeTrackingForm.jsx';

function App() {
  return (
    <div className='contenedor'> 

      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/registerDay' element={<RegisterDay />}/>
          <Route path='/registerFood' element={<TimeTrackingForm title="Registro de hora de comida" functionApi={addLunchTime}/>}/>
          <Route path='/dailyTotal' element={<DailyTotal />}/>
        </Routes>
      </Router> 

    </div>
  )
}

export default App;
