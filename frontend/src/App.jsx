import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import RetailerLogin from "./pages/RetailerLogin.jsx";
import RetailerSignup from "./pages/RetailerSignup.jsx";
import NotFound from "./pages/NotFound.jsx";
import MasterAdminDashboard from "./pages/MasterAdminDashboard.jsx";
import MasterAdminLogin from "./pages/MasterAdminLogin.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/retailer/login" element={<RetailerLogin />} />
      <Route path="/superadminkalogin12345" element={<MasterAdminLogin />} />
      <Route path="/superadminkalogin12345/dashboard" element={<MasterAdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
