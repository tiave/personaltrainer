import './App.css';
import Customerlist from './components/Customerlist.js';
import Trainingslist from './components/Trainingslist.js';
import TrainingsCalendar from './components/TrainingsCalendar.js';
import Navbar from './components/Navbar.js';
import{ BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Customerlist />} />
            <Route path="/customerlist" element={<Customerlist />}   />
            <Route path="/trainingslist" element={<Trainingslist />} />
            <Route path="/trainingscalendar" element={<TrainingsCalendar />} />
            <Route path="*" render= {() => <h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
  </div>
  );
}

export default App;