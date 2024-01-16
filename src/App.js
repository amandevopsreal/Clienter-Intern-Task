import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Signin';
import Navbar from './components/Navbar';
import { AddFile } from './components/AddFile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<AddFile />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
