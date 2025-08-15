
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Headers from './components/headers';
import Dashboard from './components/dashboard';
import Error from './components/error';

import { Routes ,Route } from 'react-router-dom';
import Signup from './components/signup';


function App() {
  return (

    <>
    <Headers/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="*" element={<Error />} />
      </Routes>
    </>

    
  );
}

export default App;
