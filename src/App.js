import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import MyAppointment from "./pages/MyAppointment";
import MyProfile from "./pages/MyProfile";
import BookAppt from "./pages/BookAppt";
import LawyerPage from "./pages/LawyerPage";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  // check if user is logged in or not
  const token = sessionStorage.getItem("token");
  console.log(token);
  const location = useLocation();

  if (
    !token &&
    location.pathname.includes("/bookappt")
    // location.pathname !== "/login" &&
    // !location.pathname.includes("/register")
  ) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myappt" element={<MyAppointment />} />
        <Route path="/myprofile" element={<MyProfile />} />

        <Route path="/bookappt" element={<BookAppt />}>
          <Route path="lawyerPage" element={<LawyerPage />} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
