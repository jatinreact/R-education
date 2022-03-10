import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import UserList from "./Components/EducationPages/User/UserList"
import Instructor from "./Components/EducationPages/Instructor/Instructor";
import AddGroup from "./Components/ManageGroup/AddGroup";
import GroupList from "./Components/ManageGroup/GroupList"
import Course from "./Components/EducationPages/Course/Course";
import CouponCode from "./Components/EducationPages/CouponCode/CouponCode"
import AddVedio from "./Components/ManageVideo/AddVideo"


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/user-list" element={<UserList />} />
        <Route exact path="/instructor" element={<Instructor />} />
        <Route exact path="/AddGroup" element={<AddGroup />} />
        <Route exact path="/GroupList" element={<GroupList />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/CouponCode" element={<CouponCode />} />
        <Route exact path="/AddVedio" element={<AddVedio />} />
     
        

      </Routes>
    </>
  );
}

export default App;
