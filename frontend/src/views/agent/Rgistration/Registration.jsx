import React from "react";

const Registration = () => {
  return (
    <div className="relative w-full">
      <div className="top-0 left-0 h-full w-full max-w-[900px] mx-auto">
          <img src="/longbaner.jpg" className="w-full" alt="" />
      </div>
      <div className="flex w-full justify-center gap-2">
        <div className="w-full flex-1 md:block hidden">
          <img src="/asthait.jpg" className="w-full" alt="" />
        </div>
        <form className="relative w-full flex-[2] py-2">
          <div className="relative w-full rounded-sm bg-brand-100/50 p-3 text-center">
            <h1 className="text-2xl font-bold">Astha trip</h1>
            <p className="text-brand-700">Apply for Agent Acount</p>
          </div>
          <div className="relative flex w-full flex-col p-2">
            <label className="text">Name</label>
            <input
              className="rounded-md border-2 border-brand-500 bg-white p-2 outline-none transition-all duration-300 focus:shadow-md"
              placeholder="type here"
              type="text"
            />
          </div>
          <div className="relative flex w-full flex-col p-2">
            <label className="text">NID (national ID number)</label>
            <input
              className="rounded-md border-2 border-brand-500 bg-white p-2 outline-none transition-all duration-300 focus:shadow-md"
              placeholder="type here"
              type="text"
            />
          </div>
          <div className="relative flex w-full flex-col p-2">
            <label className="text">Email</label>
            <input
              className="rounded-md border-2 border-brand-500 bg-white p-2 outline-none transition-all duration-300 focus:shadow-md"
              placeholder="type here"
              type="text"
            />
          </div>
          <div className="relative flex w-full flex-col p-2">
            <label className="text">Phone</label>
            <input
              className="rounded-md border-2 border-brand-500 bg-white p-2 outline-none transition-all duration-300 focus:shadow-md"
              placeholder="type here"
              type="text"
            />
          </div>
          <div>
            <button className="px-4 py-2 bg-white border-2 border-brand-700 rounded-md mx-3 hover:scale-105 active:scale-95 hover:shadow-md transition-all duration-300"> Apply </button>
          </div>
        </form>
        <div className="relative w-full flex-1 md:block hidden">
        <img src="/asthait.jpg" className="w-full" alt="" />
        </div>
        <div className="">

        </div>
      </div>
      <div className="top-0 left-0 h-full w-full max-w-[900px] mx-auto">
          <img src="/longbaner.jpg" className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Registration;
