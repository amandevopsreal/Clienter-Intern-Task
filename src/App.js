import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Signin';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import FileState from './context/files/fileState';

function App() {
  return (
    <>
      <FileState>
        <Router>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </FileState>
    </>
  );
}

export default App;
