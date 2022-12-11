import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './screens/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      
    </div>
  );
}

export default App;
