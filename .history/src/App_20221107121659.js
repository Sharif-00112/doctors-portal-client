import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Header></Header> */}
          <Routes>
            <Route exact path = '/' element={<Home/>}/>
            <Route exact path = '/home' element={<Home/>}/>
            <Route exact path = '/login' element={<Login/>}/>
            <Route exact path = '/register' element={<Register/>}/>
            <Route exact path = '/appointment' element={<Appointment/>}/>
            <Route exact path = '*' element={<Home/>}/>
          </Routes>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
