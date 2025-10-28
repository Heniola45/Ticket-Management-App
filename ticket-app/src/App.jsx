import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authenticationscreen/Login";
import Register from "./pages/authenticationscreen/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Tickets from "./pages/ticket/Tickets";
import LandingPage from "./pages/landingpage/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        } />
        <Route path="/tickets" element={
          <ProtectedRoute>
            <Tickets/>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}