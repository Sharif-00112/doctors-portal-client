import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ResponsiveNavigation from './Pages/Shared/Navigation/ResponsiveNavigation';
import Footer from './Pages/Shared/Footer/Footer';
 
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Header></Header> */}
          <ResponsiveNavigation></ResponsiveNavigation>
          <Routes>
            <Route exact path = '/' element={<Home/>}/>
            <Route exact path = '/home' element={<Home/>}/>
            <Route exact path = '/login' element={<Login/>}/>
            <Route exact path = '/register' element={<Register/>}/>
            <Route exact path = '/appointment' element = {
              <PrivateRoute>
                <Appointment></Appointment>
              </PrivateRoute>
            }> </Route>
            <Route path = 'dashboard/*' element = {
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }> </Route>
            <Route path = '*' element={<NotFound/>}/>
          </Routes>
          <Footer></Footer> 
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
