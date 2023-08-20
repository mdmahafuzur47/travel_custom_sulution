import React, { useEffect, useState } from "react";
import Table from "./table";
import axios from "axios";

const Index = () => {
  const [reqList, setReqList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/admin/get-balance-requests");
        setReqList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  },[]);

  return (
    <div className="relative w-full pt-5">
      <Table
        colunm={[
          {
            Header: "Id",
            accessor: "id",
          },
          {
            Header: "Agent",
            accessor: "agent",
            Cell: (props) => {
                // console.log(props);
                return(
                   <div>
                     <p className="text-brand-900 font-bold" ><span>Name: </span>{props.row.original.agent.name}</p>
                     <p><span>Email: </span>{props.row.original.agent.email}</p>
                     <p><span>Phone: </span>{props.row.original.agent.phone}</p>
                   </div>
                )
            }
          },
          {
            Header: "Amount",
            accessor: "amount",
          },
          {
            Header: "Transition Id",
            accessor: "transition_id",
          },
          {
            Header: "Note",
            accessor: "message",
          },
          {
            Header: "Action",
            accessor: "action",
            Cell: (props) => {
                return (
                    <div>
                        <button className="bg-brand-900 hover:bg-brand-800 text-white font-bold py-2 px-4 border border-transparent rounded">Approve</button>
                        <button className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 border border-transparent rounded">Reject</button>
                    </div>
                )
            }
          },
        ]}
        datas={reqList}
      />
    </div>
  );
};

export default Index;
