import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AgentProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPassOpen, setIsPassOpen] = useState(false);
  const [agent, setAgent] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const {
    register: passReg,
    handleSubmit: passHS,
    reset: passRe,
    getValues,
  } = useForm();

  useEffect(() => {
    const getAuth = async () => {
      try {
        const { data: agent } = await axios.get("/api/agent/info");
        setAgent(agent);
      } catch (e) {
        console.log(e);
      }
    };

    getAuth();
  }, []);

  async function onSubmit(data) {
    data.amount = parseFloat(data.amount);
    try {
      await toast.promise(
        axios.post(
          "/api/agent/add-balance",
          Object.assign(data, { agent_id: agent.id })
        ),
        {
          pending: "Please wait loading..",
          success: "Balance request sent",
          error: "Something went wrong, try again!",
        }
      );

      reset();
      setIsOpen(false);
    } catch (e) {
      console.log(e);
    }
  }

  function onInvalid(error) {
    toast.error("Enter valid information!");
  }

  async function onPassSubmit(data) {
    try {
      await toast.promise(axios.post("/api/agent/change-password", data), {
        pending: "Please wait loading..",
        success: "Password change successfully!",
        error: "Something went wrong, try again!",
      });

      passRe();
      setIsPassOpen(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function onPassInvalid(error) {
    if (error.password && error.password.type === "validate") {
      return toast.error(error.password.message);
    }

    toast.error("Enter valid information!");
  }

  return (
    <>
      <div className="container mx-auto flex flex-col gap-5 md:flex-row">
        <div>
          <div className="flex w-full items-center justify-center md:w-[300px]">
            <img
              className="h-40 w-40 rounded-full"
              src="/logoastha.png"
              alt="img"
            />
          </div>
          <div className="flex w-full flex-col justify-center lg:w-[500px]">
            <div className="flex flex-col items-center gap-y-[.5] md:items-start">
              <p className=" mb-2 rounded-lg py-1 text-2xl font-bold text-gray-800">
                {agent.name ?? ""}
              </p>

              <p className="rounded-lg font-bold text-gray-800">
                {agent.email ?? ""}
              </p>
              <p className=" rounded-lg font-bold text-gray-800">
                {agent.phone ?? ""}
              </p>
            </div>
          </div>
        </div>
        <div className="my-10 w-full">
          <img
            className="h-[200px] w-full object-contain"
            src="/asthatripbaner.jpg"
            alt="img"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setIsOpen(true);
            setIsPassOpen(false);
          }}
          className="inline-block rounded-lg border-2 border-brand-900/30 bg-white/10  p-3 text-xl font-bold text-brand-600 shadow-xl hover:scale-105 dark:border-brand-200 dark:text-brand-100"
        >
          Add Balance
        </button>
        <button
          onClick={() => {
            setIsPassOpen(true);
            setIsOpen(false);
          }}
          className="ml-4 inline-block rounded-lg border-2 border-brand-900/30 bg-white/10  p-3 text-xl font-bold text-brand-600 shadow-xl hover:scale-105 dark:border-brand-200 dark:text-brand-100"
        >
          Change Password
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="z-20 w-[80vw] rounded bg-white p-6 shadow-md lg:w-[35vw]">
            <div className="relative">
              <h2 className="mb-4 text-lg font-semibold">Add Amount</h2>
              <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
                <div className="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    Amount*
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your amount"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                    {...register("amount", { required: true })}
                  />
                </div>
                <div className="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    Transition ID*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your transition ID"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                    {...register("transition_id", { required: true })}
                  />
                </div>
                <div className="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    Message
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter your Message Here..."
                    className="mt-2 flex h-24 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                    {...register("message")}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block rounded-lg border-2 border-brand-900/30 bg-white/10  p-3 text-xl font-bold text-brand-600 shadow-xl hover:scale-105 dark:border-brand-200 dark:text-brand-100"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute bottom-2 right-2 mt-4 rounded bg-gray-300 py-2 px-4 font-semibold text-gray-800 hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isPassOpen && (
        <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="z-20 w-[80vw] rounded bg-white p-6 shadow-md lg:w-[35vw]">
            <div className="relative">
              <h2 className="mb-4 text-lg font-semibold">Change Password</h2>
              <form onSubmit={passHS(onPassSubmit, onPassInvalid)} noValidate>
                <div className="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    Current Password*
                  </label>
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                    {...passReg("current-password", { required: true })}
                  />
                </div>
                <div className="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    New Password*
                  </label>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                    {...passReg("new-password", { required: true })}
                  />
                </div>

                <div className="mb-3 ">
                  <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-[#E8F0FE] bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
                    {...passReg("password", {
                      required: true,
                      validate: () => {
                        if (
                          getValues("new-password") !== getValues("password")
                        ) {
                          return "password and confirm password not match!";
                        }
                      },
                    })}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-block rounded-lg border-2 border-brand-900/30 bg-white/10  p-3 text-xl font-bold text-brand-600 shadow-xl hover:scale-105 dark:border-brand-200 dark:text-brand-100"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={() => setIsPassOpen(false)}
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
