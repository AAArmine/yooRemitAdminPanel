import React from "react";
import Login from "./templates/login";
import ProtectedRoutes from "./protectedRoutes";
import { Dashboard } from "./templates/dashboard";
import Transaction from "./templates/transaction";
import Invoice from "./templates/invoice";
import FeeManagement from "./templates/feeManagement";
import UserManagement from "./templates/userManagement";
import "antd/dist/antd.css";
import { Route } from "react-router";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard test="test" />} />
          <Route path="/transaction-report" element={<Transaction />} />
          <Route path="/invoice-report" element={<Invoice />} />
          <Route path="/fee-management" element={<FeeManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
