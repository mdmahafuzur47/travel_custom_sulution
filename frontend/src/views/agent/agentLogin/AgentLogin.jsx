import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AgentLogin = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      await toast.promise(axios.post("/api/agent/login", data), {
        pending: "Please with loading...",
        error: {
          render({ data }) {
            if (data.response.data.code === "not-found") {
              return "User not found!";
            } else if (data.response.data.code === "not-match") {
              return "User and Password not match!";
            }
            return "Something went wrong!";
          },
        },
        success: "Login successful!",
      });
      reset();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  function onInvalid() {
    toast.error("Enter valid information!");
  }

  return (
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <img
          className="h-[80vh] w-[500px]"
          src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
          alt="img"
        />
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <img
          className="h-[150px] w-[400px]"
          src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
          alt="logo-img"
        />
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          className="mt-[5vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]"
        >
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign In As Agent
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          <div className="mb-3">
            <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
              Email*
            </label>
            <input
              type="text"
              placeholder="example@mail.com"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
              Password*
            </label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
              {...register("password", { required: true })}
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
        </form>
      </div>
      <div>
        <img
          className="h-[80vh] w-[500px]"
          src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
          alt="img"
        />
      </div>
    </div>
  );
};

export default AgentLogin;
