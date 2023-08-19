import React from 'react'

const DetailAgentmodule = ({data}) => {
  return (
    <div className='w-full fixed top-0 left-0 h-screen  z-10 bg-white/60 pt-48 backdrop-blur-md overflow-auto '>
            <div className='w-full mx-2 md:w-11/12 md:mx-auto bg-brand-100 p-3 rounded-md shadow-md'>
                <div className='w-full relative p-3 border-b-2 border-brand-600 text-white text-xl font-bold flex items-center'>
                        <span className='text-2xl text-brand-700 pr-2'><PhUserBold/></span > Agent Details
                </div>
                <div className='w-full relative '>
                    <div>
                        <span>Name</span>: <span>nahid</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DetailAgentmodule;


export function PhUserBold(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12ZM76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52Z"></path></svg>
    )
  }