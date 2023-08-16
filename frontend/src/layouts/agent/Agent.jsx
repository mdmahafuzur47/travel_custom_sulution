
import React from "react";
import { Outlet } from "react-router-dom";
import AgentNavbar from "views/agent/navbar/AgentNavbar";
import TotalInfo from "views/agent/totalInfo/TotalInfo";

function Agent() {
  return (
    <div className="bg-[#F5F8FE] p-5 md:p-1">
      <AgentNavbar />
      <div className="container mx-auto my-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Agent;
