import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './LoginAuth/login';
import Signup from './LoginAuth/Signup';
import Home from './component/Home';
import RegistrationForm from './component/RegistrationForm';
import Sidebar from './component/Sidebar';
import Landing from './component/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;