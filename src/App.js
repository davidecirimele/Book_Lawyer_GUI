
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import MyAppointment from './pages/MyAppointment';
import MyProfile from './pages/MyProfile';
import BookAppt from './pages/BookAppt';



const App = () =>{
  return (
   
   

 <BrowserRouter>
 <Sidebar>
  <Routes>
  <Route path="/" element={<MyProfile />} />
    <Route path="/myappt" element={<MyAppointment />} />
    <Route path="/myprofile" element={<MyProfile />} />
    <Route path="/bookappt" element={<BookAppt />} />
    
  </Routes>
  </Sidebar>
  </BrowserRouter> 


  );

};

export default App;
