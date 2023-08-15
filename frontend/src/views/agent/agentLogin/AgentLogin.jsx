import React, { useState } from "react";

const AgentLogin = () => {
  const [datas, setDatas] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const obj = { email, password };

  const handleSubmit = () => {
    setDatas(obj);
  };
  console.log(datas);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <img src="" alt="logo-img" />
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In As Agent
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <div className="mb-3">
          <label
            className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white"
          >
            Email*
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mail@simmmple.com"
            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
          />
        </div>
        <div className="mb-3">
          <label
            className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white"
          >
            Password*
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min. 8 characters"
            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Sign In
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentLogin;
