import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Registration() {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      await axios.post("/api/agent/reg", data);
      navigate("/agent");
      toast.success("Login successfully done");
      reset();
    } catch (e) {
      if (e.code === "email-exist") return toast.error("Email already exist!");
      toast.error("Something went wrong!");
    }
  }

  function onInvalid() {
    return toast.error("Please fill all filed");
  }

  return (
    <div className="relative w-full">
      <div className="top-0 left-0 mx-auto h-full w-full max-w-[900px]">
        <img src="/longbaner.jpg" className="w-full" alt="" />
      </div>
      <div className="flex w-full justify-center gap-2">
        <div className="hidden w-full flex-1 md:block">
          <img src="/asthait.jpg" className="w-full" alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          className="relative w-full flex-[2] py-2"
        >
          <div className="relative w-full rounded-sm bg-brand-100/50 p-3 text-center">
            <h1 className="text-2xl font-bold">Astha trip</h1>
            <p className="text-brand-700">Apply for Agent Account</p>
          </div>
          <div className="relative flex w-full flex-col p-2">
            <label className="text">Name</label>
            <input
              className="rounded-md border-2 border-brand-500 bg-white p-2 outline-none transition-all duration-300 focus:shadow-md"
              {...register("name", { required: true })}
              placeholder="type here"
              type="text"
            />
          </div>
          <div className="relative flex w-full flex-col p-2">
            <label className="text">NID (national ID number)</label>
            <input
              className="rounded-md border-2 border-brand-500 bg-white p-2 outline-none transition-all duration-300 focus:shadow-md"
              {...register("nid_no", { required: true })}
              placeholder="type here"
              type="text"
            />
          </div>
          <div className="relative flex w-full flex-col p-2">
            <label className="text">Email</label>
            <input
              className="rounded-md border-2 border-brand-500 bg-white p-2 outline-none transition-all duration-300 focus:shadow-md"
              {...register("email", { required: true })}
              placeholder="type here"
              type="text"
            />
          </div>
          <div className="relative flex w-full flex-col p-2">
            <label className="text">Phone</label>
            <input
              className="rounded-md border-2 border-brand-500 bg-white p-2 outline-none transition-all duration-300 focus:shadow-md"
              {...register("phone", { required: true })}
              placeholder="type here"
              type="text"
            />
          </div>
          <div>
            <button className="mx-3 rounded-md border-2 border-brand-700 bg-white px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95">
              Apply
            </button>
          </div>
        </form>
        <div className="relative hidden w-full flex-1 md:block">
          <img src="/asthait.jpg" className="w-full" alt="" />
        </div>
        <div className=""></div>
      </div>
      <div className="top-0 left-0 mx-auto h-full w-full max-w-[900px]">
        <img src="/longbaner.jpg" className="w-full" alt="" />
      </div>
    </div>
  );
}

export default Registration;
