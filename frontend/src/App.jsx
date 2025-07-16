import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import Register from "./pages/Register.jsx"; // <--- Add this line
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/register" element={<Register />} /> {/* Register Route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
