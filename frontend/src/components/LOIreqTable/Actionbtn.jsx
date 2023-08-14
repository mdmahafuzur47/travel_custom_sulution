import React from "react";
import Dropdown from "components/dropdown";
import { AiOutlineUser } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { TiLightbulb } from "react-icons/ti";
import Swal from "sweetalert2";
import axios from "axios";

function CardMenu(props) {
  const { transparent,data,prop } = props;
  const [open, setOpen] = React.useState(false);

  // Handle Approved
  const handleApproved = () => {
    let family=1;
    const filterData = data.filter(data => data.reference === prop?.reference);
    if (filterData.length > 1) {
      family = filterData.length;
    }

    Swal.fire({
      title: 'Are you sure to Approved?',
      text: `Name: ${prop?.guest_name}, Passport Number: ${prop?.pasport_number}, Family: ${family}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#422AFB',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Approved It!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          const res= await axios.post('/api/loi/approved', {id: prop?.id })
          console.log(res);
        } catch (err) {
          console.log(err.message);
        }
        // Swal.fire(
        //   'Approved!',
        //   '',
        //   'success'
        // )
      }
    })
  }

  return (
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          open={open}
          className={`flex items-center text-xl hover:cursor-pointer ${
            transparent
              ? "bg-none text-white hover:bg-none active:bg-none"
              : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
          } linear justify-center rounded-lg font-bold transition duration-200`}
        >
          <BsThreeDots className="h-6 w-6" />
        </button>
      }
      animation={"origin-top-right transition-all duration-300 ease-in-out"}
      classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
      children={
        <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p onClick={handleApproved} className="hover:text-black flex cursor-pointer items-center gap-1 text-gray-600 hover:font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
            Approved
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
            <span>
              <AiOutlineShop />
            </span>
            Action
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-1 pt-1 text-gray-600 hover:font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21h22L12 2L1 21zm3.47-2L12 5.99L19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"/></svg>
            Cancel
          </p>
        </div>
      }
    />
  );
}

export default CardMenu;
