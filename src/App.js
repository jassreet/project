
import './App.css';
import Banner from './layouts/Banner';
import About from './layouts/About';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Main from './layouts/Main';
import Home from './layouts/Homepage';
import Login from './layouts/Login';
import Courses from './layouts/Courses';
import Join from './layouts/Join';
import Gallery from './layouts/Gallery';
import Contact from './layouts/Contact';
import Register from './layouts/Register';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path="/" element={<Main/>}>
          <Route path="/" element={<Home/>}/>
           <Route path="/banner" element={<Banner/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/courses" element={<Courses/>}/>
           <Route path="/join" element={<Join/>}/>
           <Route path="/gallery" element={<Gallery/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/register" element={<Register/>}/>
         </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
