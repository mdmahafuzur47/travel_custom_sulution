import React from 'react';
import Table from './table';

const Index = () => {
  return (
    <div className='w-full relative pt-5'>
        <Table
        colunm={[
            {
                Header: "Id",
                accessor: "id",                
            },
            {
                Header: "Agent",
                accessor: "name",                
            },
            {
                Header: "Amount",
                accessor: "emain",                
            },
            {
                Header: "Transiction Id",
                accessor: "amount",                
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
        datas={[]}
        />
    </div>
  )
}

export default Index