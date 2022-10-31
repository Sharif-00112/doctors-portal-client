import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
          <Route exact path = '/home' element={<Home/>}/>
          <Route exact path = '*' element={<Home/>}/>
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
