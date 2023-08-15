import Table  from "../../public/Entry/ComplexTable";
import React from "react";

function TotalInfo() {
  return (
    <>
      <div className="mt-14 flex flex-wrap gap-5">
        <div class="!z-5 relative flex flex-grow items-center rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full  bg-[#F4F7FE] text-brand-500 shadow-sm dark:text-white">
              <HeroiconsOutlineArrowCircleRight />
            </div>
          </div>
          <div class="h-50 ml-4 flex w-auto flex-col justify-center">
            <p class="font-dm text-sm font-medium text-gray-600">
              Total Submit
            </p>
            <h4 class="text-xl font-bold text-navy-700 dark:text-white">400</h4>
          </div>
        </div>
        <div class="!z-5 relative flex flex-grow items-center rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full  bg-[#F4F7FE] text-brand-500 shadow-sm dark:text-white">
              <HeroiconsOutlineChartPie />
            </div>
          </div>
          <div class="h-50 ml-4 flex w-auto flex-col justify-center">
            <p class="font-dm text-sm font-medium text-gray-600">
              Total pandding
            </p>
            <h4 class="text-xl font-bold text-navy-700 dark:text-white">300</h4>
          </div>
        </div>
        <div class="!z-5 relative flex flex-grow items-center rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full  bg-[#F4F7FE] text-brand-500 shadow-sm dark:text-white">
              <SubwayTick />
            </div>
          </div>
          <div class="h-50 ml-4 flex w-auto flex-col justify-center">
            <p class="font-dm text-sm font-medium text-gray-600">
              Total Confrom
            </p>
            <h4 class="text-xl font-bold text-navy-700 dark:text-white">
              1200
            </h4>
          </div>
        </div>
        <div class="!z-5 relative flex flex-grow items-center rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full  bg-[#F4F7FE] text-brand-500 shadow-sm dark:text-white">
              <SubwayCrpss />
            </div>
          </div>
          <div class="h-50 ml-4 flex w-auto flex-col justify-center">
            <p class="font-dm text-sm font-medium text-gray-600">
              Total Cencle
            </p>
            <h4 class="text-xl font-bold text-navy-700 dark:text-white">200</h4>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <a
          class="inline-block rounded-lg border-2 border-brand-900/30 bg-white/10  p-3 text-xl font-bold text-brand-600 shadow-xl hover:scale-105 dark:border-brand-200 dark:text-brand-100"
          href="/agentEntry"
        >
          <span class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v6.7q-.475-.225-.975-.388T19 11.075V5H5v14h6.05q.075.55.238 1.05t.387.95H5Zm0-3v1V5v6.075V11v7Zm2-1h4.075q.075-.525.238-1.025t.362-.975H7v2Zm0-4h6.1q.8-.75 1.788-1.25T17 11.075V11H7v2Zm0-4h10V7H7v2Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Z"
              ></path>
            </svg>
            Add New Entry
          </span>
        </a>
      </div>

      <div className="mt-5">
        <Table
          columnsData={[
            {
              Header: "Guest Name",
              accessor: "guestName",
            },
            {
              Header: "Travel Date",
              accessor: "travelDate",
            },
            {
              Header: "Country Name",
              accessor: "countryName",
            },

            {
              Header: "Agent Date",
              accessor: "AgentDate",
              // TODO: Add Agent in Database
            },
            {
              Header: "Action",
              accessor: "action",
            },
          ]}
          tableData={[]}
        />
      </div>
    </>
  );
}

export default TotalInfo;

export function SubwayCrpss(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M512 76.8L435.2 0L256 179.2L76.8 0L0 76.8L179.2 256L0 435.2L76.8 512L256 332.8L435.2 512l76.8-76.8L332.8 256z"
      ></path>
    </svg>
  );
}

export function SubwayTick(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z"
      ></path>
    </svg>
  );
}

export function HeroiconsOutlineArrowCircleRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
      ></path>
    </svg>
  );
}

export function HeroiconsOutlineChartPie(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M11 3.055A9.001 9.001 0 1 0 20.945 13H11V3.055Z"></path>
        <path d="M20.488 9H15V3.512A9.025 9.025 0 0 1 20.488 9Z"></path>
      </g>
    </svg>
  );
}
