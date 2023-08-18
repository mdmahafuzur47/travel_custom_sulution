import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AgentNavbar from "views/agent/navbar/AgentNavbar";
import TotalInfo from "views/agent/totalInfo/TotalInfo";
import { useNavigate } from "react-router-dom";

function Agent() {
  const navigat = useNavigate();
  const [Admin, SetAdmin] = useState(false);
  useEffect(() => {
    const getAuth = async () => {
      const getuser = true;
      if (getuser) {
        SetAdmin(true);
      } else {
        navigat('/agent/Login')
      }
    };
    getAuth()
  }, []);

  return (
    <>
      {Admin ? (
        <div className="bg-[#F5F8FE] p-5 md:p-1">
          <AgentNavbar />
          <div className="container mx-auto my-5">
            
            <Outlet />
          </div>
        </div>
      ) : (
        <h1> loding...</h1>
      )}
    </>
  );
}

export default Agent;
