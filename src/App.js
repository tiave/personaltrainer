import './App.css';
import Customerlist from './components/Customerlist.js';
import Trainingslist from './components/Trainingslist.js';
import Home from './components/Home.js';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import{ BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Personal Trainer
          </Typography>
        </Toolbar>
      </AppBar>
      <Customerlist />
      <Trainingslist /> */}
<AppBar position="static">
  <Toolbar>
   <Typography variant="h6">
     Personal trainer
   </Typography>
   
    </Toolbar>
    </AppBar>
        <BrowserRouter>
      
        {/* <Link to="/">Home</Link  >{' '} */}
        <Link to="/customerlist">Customers</Link>{' '}
        <Link to="/trainingslist">Trainings</Link >{' '}
        
        <Routes>
          {/* <Route exact path ="/" component={Home}/> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/customerlist" element={<Customerlist />}   />
          <Route path="/trainingslist" element={<Trainingslist />} />
          <Route path="*" render= {() => <h1>Page not found</h1>} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
