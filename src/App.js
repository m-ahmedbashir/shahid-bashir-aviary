import "./App.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/Landing Page/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign Up/SignUp";
import ForgetPassword from "./Components/Forget Password/ForgetPassword";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import SideNavBar from "./Components/Side navBar/SideNavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddBirdsDetails from "./Components/Birds Images/AddBirdsDetails";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import UpdateBirdsDetails from "./Components/Birds Images/UpdateBirdsDetails";
import ViewBirdsDetails from "./Components/Birds Images/ViewBirdsDetails";

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<ProtectedRoutes />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sidenavbar" element={<SideNavBar />} />
            <Route path="/addBirdsDetails" element={<AddBirdsDetails />} />
            <Route path="/viewBirdsDetails" element={<ViewBirdsDetails />} />
            <Route
              path="/updateBirdsDetails"
              element={<UpdateBirdsDetails />}
            />
            <Route path="/signup" element={<SignUp />} />

            <Route exact path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
