import { Routes, Route, BrowserRouter } from "react-router-dom";
import Invoice from "../Pages/Invoice";
import Profile from "../Pages/Profile";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
