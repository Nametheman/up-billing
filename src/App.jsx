import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Login from "./layout/AuthLayout";
import { Home, Reports, Settings } from "./components";
import InActivityTimeOut from "./hooks/Inactivity";
import { ProtectedRoute } from "./hooks";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route element={<InActivityTimeOut />}> */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
