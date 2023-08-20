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
  });

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
            accessor: "agent.name",
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
            accessor: "note",
          },
          {
            Header: "Action",
            accessor: "action",
          },
        ]}
        datas={reqList}
      />
    </div>
  );
};

export default Index;
