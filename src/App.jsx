import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import RetailerLogin from "./pages/RetailerLogin.jsx";
import RetailerSignup from "./pages/RetailerSignup.jsx";
import MasterAdminLogin from "./pages/MasterAdminLogin.jsx";
import MasterAdminDashboard from "./pages/MasterAdminDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/retailer/login" element={<RetailerLogin />} />
      <Route path="/retailer/signup" element={<RetailerSignup />} />
      <Route path="/masterAdminYahaHoga" element={<MasterAdminLogin />} />
      <Route path="/masterAdminYahaHoga/dashboard" element={<MasterAdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
