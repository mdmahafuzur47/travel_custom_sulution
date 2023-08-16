import React, { useState } from "react";
import AgentNavbar from "../navbar/AgentNavbar";

const AgentProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row gap-5">
        <div>
          <div className="flex w-full md:w-[300px] items-center justify-center">
            <img
              className="h-40 w-40 rounded-full"
              src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
              alt="img"
            />
          </div>
          <div className="flex w-full lg:w-[500px] flex-col justify-center">
            <div className="flex flex-col items-center md:items-start gap-y-[.5]">
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
        </div>
        <div className="my-10 w-full">
          <img
            className="h-[200px] w-full"
            src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
            alt="img"
          />
        </div>
      </div>
      <div>
        <button
          onClick={openModal}
          class="inline-block rounded-lg border-2 border-brand-900/30 bg-white/10  p-3 text-xl font-bold text-brand-600 shadow-xl hover:scale-105 dark:border-brand-200 dark:text-brand-100"
        >
          Add Balance
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="z-20 w-[80vw] rounded bg-white p-6 shadow-md lg:w-[35vw]">
            <div className="relative">
              <h2 className="mb-4 text-lg font-semibold">Add Amount</h2>
              <form>
                <div class="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    Amount*
                  </label>
                  <input
                    type="text"
                    id="amount"
                    placeholder="Enter your amount"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                  />
                </div>
                <div class="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    Transition ID*
                  </label>
                  <input
                    type="text"
                    id="transition-id"
                    placeholder="Enter your transition ID"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                  />
                </div>
                <div class="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    Message*
                  </label>
                  <textarea
                    type="text"
                    id="transition-id"
                    placeholder="Enter your Message Here..."
                    className="mt-2 flex h-24 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                  />
                </div>
                <button class="inline-block rounded-lg border-2 border-brand-900/30 bg-white/10  p-3 text-xl font-bold text-brand-600 shadow-xl hover:scale-105 dark:border-brand-200 dark:text-brand-100">
                  Submit
                </button>
              </form>
              <button
                onClick={closeModal}
                className="absolute bottom-2 right-2 mt-4 rounded bg-gray-300 py-2 px-4 font-semibold text-gray-800 hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-5 overflow-x-auto bg-white">
        <div className="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border px-6 py-5 pb-6 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none sm:overflow-x-auto">
          <table className="border-collapse">
            <thead className="rounded-xl text-[#A3AED0]">
              <tr className="rounded-md">
                <th className="py-3 px-4 text-left font-semibold">
                  Invoice Number
                </th>
                <th className="py-3 px-4 text-left font-semibold">Amount</th>
                <th className="py-3 px-4 text-left font-semibold">Date</th>
                <th className="py-3 px-4 text-left font-semibold">Status</th>
                <th className="py-3 px-4 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              <tr className="even:bg-[#F7F4FE] hover:bg-[#F7F4FE]">
                <td className="py-3 px-4">invoice.invoiceNumber</td>
                <td className="py-3 px-4">invoice.amount</td>
                <td className="py-3 px-4">invoice.date</td>
                <td className="py-3 px-4">
                  <span>status</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:underline">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="even:bg-[#F7F4FE] hover:bg-[#F7F4FE]">
                <td className="py-3 px-4">invoice.invoiceNumber</td>
                <td className="py-3 px-4">invoice.amount</td>
                <td className="py-3 px-4">invoice.date</td>
                <td className="py-3 px-4">
                  <span>status</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:underline">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="even:bg-[#F7F4FE] hover:bg-[#F7F4FE]">
                <td className="py-3 px-4">invoice.invoiceNumber</td>
                <td className="py-3 px-4">invoice.amount</td>
                <td className="py-3 px-4">invoice.date</td>
                <td className="py-3 px-4">
                  <span>status</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:underline">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="even:bg-[#F7F4FE] hover:bg-[#F7F4FE]">
                <td className="py-3 px-4">invoice.invoiceNumber</td>
                <td className="py-3 px-4">invoice.amount</td>
                <td className="py-3 px-4">invoice.date</td>
                <td className="py-3 px-4">
                  <span>status</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:underline">
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AgentProfile;
