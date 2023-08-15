import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Entry from "views/public/Entry/Entry";
import Agent from "layouts/agent/Agent";
import AgentEntry from "views/agent/agentEntry/AgentEntry";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="entry/*" element={<Entry />} />
      <Route path="agentEntry/*" element={<AgentEntry />} />
      <Route path="/agent" element={<Agent />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
