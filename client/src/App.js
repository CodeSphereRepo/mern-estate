
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.js';
import Home from './pages/Home.js';
import Signin from './pages/Signin.js';
import About from './pages/About.js';
import Profile from './pages/Profile.js';
import Search from './pages/Search.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
