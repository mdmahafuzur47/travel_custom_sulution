
import React from "react";
import AgentNavbar from "views/agent/navbar/AgentNavbar";
import TotalInfo from "views/agent/totalInfo/TotalInfo";

function Agent() {
  return (
    <div className="bg-[#F5F8FE]">
      <AgentNavbar />
      <div className="container mx-auto ">
      <TotalInfo />
      </div>
    </div>
  );
}

export default Agent;
