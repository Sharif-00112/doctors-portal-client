import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
          <Route exact path = '/home' element={<Home/>}/>
          <Route exact path = '/login' element={<Login/>}/>
          <Route exact path = '/appointment' element={<Appointment/>}/>
          <Route exact path = '*' element={<Home/>}/>
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
