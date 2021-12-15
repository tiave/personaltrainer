import './App.css';
import Customerlist from './components/Customerlist.js';
import Trainingslist from './components/Trainingslist.js';
import TrainingsCalendar from './components/TrainingsCalendar.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import{ BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
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