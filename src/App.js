import Login from './Components/Login';
import './App.css';
import Signup from './Components/Signup';
import {Link ,Route,Routes,BrowserRouter} from 'react-router-dom';
import AssessmentPage from './Components/Assesment';
import HomePage from './Components/Home';


function App() {
  return (
    <>
    <BrowserRouter>
  <nav className='main'>

  <ul className='menu'>
  <img  className='logo' alt='logo' src='https://globaloneservices.co.in/wp-content/uploads/2022/10/cropped-logo-1-removebg-preview-3.png' />
<li className='title'>
  <Link to="/" className='name'>online exam portal</Link>
  </li>
  </ul>
  <ul className='logs'>
  
    <li><Link to="/" className='home'>Home</Link></li>
 <li><Link to="/assesment" className='assesment'>Assesment</Link></li> 

 <li><Link to="/login" className='login'>Login</Link></li> 
 <li> <Link to="/signup" className='signup'>Signup</Link></li>
 </ul>


  </nav>

  <Routes>
     <Route path ='/' element = {<HomePage/>} />
   <Route path = '/login' element={<Login/>} />
   <Route path = '/signup' element={<Signup />} />
     
   <Route path = '/assesment' element={<AssessmentPage/>} />
   
    
    </Routes>
    </BrowserRouter>
  </>
  
  );
}

export default App;

