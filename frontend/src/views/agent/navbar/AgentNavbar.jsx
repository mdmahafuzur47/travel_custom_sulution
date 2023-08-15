import React, { useState } from 'react'

function AgentNavbar() {

  const [open, setOpen] = useState(false);
  return (
    <nav className=" p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={''} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white text-lg font-semibold">My App</span>
        </div>
        <div className="flex gap-10 items-center">
          <div className='flex items-center gap-1 '>
            <div className='text-brand-500'>
          <HeroiconsOutlineCurrencyDollar />
            </div>
            <p className='font-dm text-md font-medium text-gray-600'>Balance</p>
          </div>
          <div onClick={()=>setOpen(!open)} className="relative">
            <img
              src={''}
              alt="User Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
            />
            {open && <div className="absolute z-10 w-[140px] bg-white text-gray-800 right-0 mt-2 py-2 px-4 rounded shadow-lg">
              <div className='border-b py-3'>
              <p class="text-sm font-bold text-navy-700 dark:text-white">👋 Hey, Adela</p>
              </div>
              <div className='py-2 flex flex-col justify-start gap-2'>
              <a href="#" class="text-sm text-gray-800 dark:text-white hover:dark:text-white">Profile Settings</a>
              <a href="#" class="text-sm text-gray-800 dark:text-white hover:dark:text-white">Profile Settings</a>
              <button className="text-sm text-start text-blue-500 hover:underline">Logout</button>
              </div>
            </div> }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AgentNavbar;


export function HeroiconsOutlineCurrencyDollar(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2s3 .895 3 2s-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></path></svg>
  )
}