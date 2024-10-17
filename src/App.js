import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Service from './Components/Service';
import Testimonial from './Components/Testimonial';
import Blog from './Components/Blog';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/blog' element={<Blog />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
