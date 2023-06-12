import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home";
import Login from "Pages/Login";
import SignUp from "Pages/SignUp";
import Dashboard from "Pages/Dashboard";
import ProtectedRoute from "components/ProtectedRoute";
import  { Toaster } from 'react-hot-toast';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
    <Toaster />
  </>
);

export default App;
