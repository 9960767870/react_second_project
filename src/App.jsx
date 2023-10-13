import logo from './logo.svg';
import './App.css';
import { Form } from 'react-router-dom';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route, Routes,
  Link
} from "react-router-dom";
import Blog from './Components/Blog';
import {useRef,useState } from "react";
import About from './Components/About';
import ExceptionPage from './Components/ExceptionPage';
import Login from './Components/Login';
import Contact from './Components/Contact';

function App() {

  const condition = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* <div className="App"> */}
        {/* <UseEffect/> */}
        {/* <TextFrom/>  */}
        {/* <Form/>  */}
        {/* <Navbar /> */}
      {/* </div> */}
      
      
      <Router> 
        <Routes>
         <Route extract path="/" element={<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} /> 
         
          {/* <Route extract path="/about" element={<About mode={darkMode} />} /> */}
          <Route extract path="/about" element={<About isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> } /> 
          <Route extract path="/blog" element={<Blog isLoggedIn={isLoggedIn}/> } /> 
          <Route extract path="/contact" element={<Contact isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> } /> 
          <Route extract path="/exception" element={<ExceptionPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> } /> 
          <Route extract path="/login" element={<Login /> } /> 
        </Routes>

      </Router>



    </>
  );
}

export default App;
