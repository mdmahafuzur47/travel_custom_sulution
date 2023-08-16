import React, { useState } from "react";
import AgentNavbar from "../navbar/AgentNavbar";

const AgentProfile = () => {
  return (
    <>
      <div className="container mx-auto flex gap-5">
        <div className="flex w-[300px] flex-col items-center justify-center">
          <img
            className="h-40 w-40 rounded-full"
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            alt="img"
          />
        </div>
        <div className="flex flex-col w-[500px] justify-center">
          <div className="flex flex-col gap-y-[.5]">
            <p className=" mb-2 rounded-lg py-1 text-2xl font-bold text-gray-800">
              John Doe John Doe
            </p>

            <p className="rounded-lg font-bold text-gray-800">
              Johndeo@gmail.com
            </p>
            <p className=" rounded-lg font-bold text-gray-800">
              +88012132234232
            </p>
          </div>
        </div>
          <div className="my-10 w-full">
            <img
              className="h-[200px] w-full"
              src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
              alt="img"
            />
          </div>
      </div>
    </>
  );
};

export default AgentProfile;
