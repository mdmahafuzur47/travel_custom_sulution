/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ComplexTable from "./ComplexTable";
import axios from "axios";
import { toast } from "react-toastify";

const Entry = () => {
  const [dataList, setDataList] = useState([]);
  const [passportCopy, setpasportCopy] = useState(null);
  const [visacopy, setvisaCopy] = useState(null);
  const [load, setload] = useState(false);
  

  const deleteList = (id) => {
    const temp = dataList.filter((e) => {
      return e.id !== id;
    });
    setDataList(temp);
  };

  // from data submit
  const onsubmit = async (e) => {
    e.preventDefault();
    if(load){
      return toast.warn('wait for pending job !');
    }
    setload(true)
    try {
      let formData = new FormData();
      formData.append("imgpasport", passportCopy);
      formData.append("imgvisa", visacopy);
      let response = await  toast.promise(axios.post('/temp/guestlist/photoupload',formData,{
        headers:{
          name:e.target.name.value,
          passport:e.target.passport.value
        }
      }),
      {
        pending:"Photo Uploading wait ...",
        success:"added to list",
        error:{
          render({data}){
            if(data.response?.status === 406){
              return  <p className="text-sm">{data.response?.data}</p>;
            }
            return <h1> Something is wrong!</h1>
            
          }
        }
      });
      // console.log(response.data);


      const data = {
        guestName: e.target.name.value || null,
        passportNumber: e.target.passport.value || null,
        travelDate: e.target.travelDate.value || null,
        hotelName: e.target.hotelName.value || null,
        passportPhoto: response.data.passpor.name || null,
        visaPhoto:  response.data.visa.name || null,
        id: uuidv4(),
      };
      
      setDataList((old) => [...old, data]);
      e.target.querySelector("#reset").click();
      setload(false)

    } catch (error) {
      console.log("🚀 ~ file: Entry.jsx:49 ~ onsubmit ~ error:", error);
      setload(false)
      
    }

  };
  return (
    <div className="relative mb-5 w-full">
      <div className="max-w-[1200px] mx-auto mt-3 w-full overflow-hidden rounded-md bg-brand-100/5 shadow-lg backdrop-blur-md">
        <div className="relative w-full bg-brand-400 p-2"></div>
        {/* titel  */}
        <div className="flex justify-between border-b-2 p-2">
          <h1 className="flex items-center justify-start text-2xl">
            <span className="pr-2 text-3xl">
              <MaterialSymbolsAddNotesOutline />
            </span>{" "}
            Entry LOI Request{" "}
          </h1>
          <span>Remaining Balence: $2000</span>
        </div>
        {/* form  */}
        <div className="relative p-2">
          <form onSubmit={onsubmit}>
            <div className="relative mt-5 w-full p-3">
              {/* name start */}
              <div className="relative w-full">
                <label className="pl-px text-brand-900">Guest Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Type Guest Name Here"
                  className="w-full rounded-sm border-2 border-brand-100 p-2 outline-none"
                />
              </div>
            </div>
            <div className="relative grid w-full grid-cols-1 gap-3 px-3 md:grid-cols-3">
              {/* pasport number  */}
              <div className="relative w-full">
                <label className="pl-px text-brand-900">
                  Passport Number *
                </label>
                <input
                  type="text"
                  name="passport"
                  required
                  placeholder="Type Passport Number Here"
                  className="w-full rounded-sm border-2 border-brand-100 p-2 outline-none"
                />
              </div>
              {/* Travel Date  */}
              <div className="relative w-full">
                <label className="pl-px text-brand-900">Travel Date *</label>
                <input
                  type="date"
                  required
                  name="travelDate"
                  className="w-full rounded-sm border-2 border-brand-100 p-2 outline-none"
                />
              </div>
              {/* Hotel Name */}
              <div className="relative w-full">
                <label className="pl-px text-brand-900">Hotel Name *</label>
                <input
                  type="text"
                  name="hotelName"
                  required
                  placeholder="Type Hotel Name Here"
                  className="w-full rounded-sm border-2 border-brand-100 p-2 outline-none"
                />
              </div>
            </div>
            {/* file input  */}
            <div className="relative grid w-full grid-cols-2 gap-3 p-2">
              {/* Passport photo */}
              <div className="relative w-full">
                <label className="pl-px text-brand-900">
                  Pasport Photo ( jpg, pdf ) *
                </label>
                <input
                  type="file"
                  required
                  name="passportPhoto"
                  // passport copy dataset in state
                  onChange={(e) => {
                    setpasportCopy(e.target.files[0]);
                  }}
                  accept="image/jpeg,application/pdf"
                  className="w-full rounded-sm border-2 border-brand-100 p-2 outline-none"
                />
              </div>
              {/* visa photo */}
              <div className="relative w-full">
                <label className="pl-px text-brand-900">
                  Visa Photo ( jpg, pdf ){" "}
                  <span className="text-sm font-extralight italic">
                    optional
                  </span>
                </label>
                <input
                  type="file"
                  name="visaPhoto"
                  onChange={(e) => {
                    setvisaCopy(e.target.files[0]);
                  }}
                  accept="image/jpeg,application/pdf"
                  className="w-full rounded-sm border-2 border-brand-100 p-2 outline-none"
                />
              </div>
            </div>
            <div className="relative mt-3 flex w-full justify-between p-2 pl-5">
              <button
                type="submit"
                className="rounded-xl border-2 border-brand-300 bg-white/10 px-3 py-2 shadow-lg dark:text-brand-200"
              >
                Add New Guest
              </button>
              <button id="reset" type="reset">
                reset
              </button>
            </div>
          </form>
        </div>
        {/* table */}
        <div className="relative w-full p-2">
          <ComplexTable
            columnsData={[
              {
                Header: "Guest Name",
                accessor: "guestName",
              },
              {
                Header: "Passport Number",
                accessor: "passportNumber",
              },
              {
                Header: "Travel Date",
                accessor: "travelDate",
              },
              {
                Header: "Hotel Name",
                accessor: "hotelName",
              },
              {
                Header: "Passport copy",
                accessor: "passportPhoto",
                Cell: (prop) => {
                  return prop.row.original.passportPhoto ? (
                    <button
                      title="visa copy available"
                      className="border-[1px] cursor-cell rounded-full border-brand-600/10 bg-green-50 p-1 text-xl text-green-600"
                    >
                      {" "}
                      <MaterialSymbolsDone />{" "}
                    </button>
                  ) : (
                    <button
                      title="visa copy not available"
                      className="border-[1px] cursor-cell rounded-full border-brand-600/10 bg-red-50 p-1 text-xl text-red-600"
                    >
                      {" "}
                      <IcTwotoneClose />{" "}
                    </button>
                  );
                },
              },
              {
                Header: "Visa copy",
                accessor: "visaPhoto",
                Cell: (prop) => {
                  return prop.row.original.visaPhoto ? (
                    <button
                      title="visa copy available"
                      className="border-[1px] cursor-cell rounded-full border-brand-600/10 bg-green-50 p-1 text-xl text-green-600"
                    >
                      {" "}
                      <MaterialSymbolsDone />{" "}
                    </button>
                  ) : (
                    <button
                      title="visa copy not available"
                      className="border-[1px] cursor-cell rounded-full border-brand-600/10 bg-red-50 p-1 text-xl text-red-600"
                    >
                      {" "}
                      <IcTwotoneClose />{" "}
                    </button>
                  );
                },
              },
              {
                Header: "Action",
                accessor: "action",
                Cell: (prop) => {
                  return (
                    <button
                      title="delete"
                      onClick={() => {
                        deleteList(prop.row.original.id);
                      }}
                      className="border-[1px] rounded-full border-brand-600/10 bg-brand-50 p-1 text-xl text-red-600 hover:shadow-lg"
                    >
                      {" "}
                      <MaterialSymbolsDeleteOutline />{" "}
                    </button>
                  );
                },
              },
            ]}
            tableData={dataList}
          />
        </div>
        <div className="relative w-full p-3 pl-5">
          <button className="rounded-xl border-2 border-brand-300 bg-white/10 px-3 py-2 shadow-lg dark:text-brand-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entry;

export function MaterialSymbolsAddNotesOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v6.7q-.475-.225-.975-.388T19 11.075V5H5v14h6.05q.075.55.238 1.05t.387.95H5Zm0-3v1V5v6.075V11v7Zm2-1h4.075q.075-.525.238-1.025t.362-.975H7v2Zm0-4h6.1q.8-.75 1.788-1.25T17 11.075V11H7v2Zm0-4h10V7H7v2Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsDeleteOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsDone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"
      ></path>
    </svg>
  );
}

export function IcTwotoneClose(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
      ></path>
    </svg>
  );
}
