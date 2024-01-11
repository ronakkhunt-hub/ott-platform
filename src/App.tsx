import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages";
import Media from "./pages/media";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import Dashboard from "./pages/dashboard";
import { colors } from "./utils/common";
import Page404 from "./pages/404";
import { AddItem } from "./containers/dashboard/AddItem";

function App() {
  return (
    <div className={colors.bg().darkBlue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media/:id" element={<Media />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/add-item" element={<AddItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
