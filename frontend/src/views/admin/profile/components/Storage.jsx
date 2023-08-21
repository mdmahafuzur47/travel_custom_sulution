import axios from "axios";
import Card from "components/card";
import React, { useEffect, useState } from "react";
import { BsCloudCheck } from "react-icons/bs";

const Storage = () => {
  const [storageInfo, setStorageInfo] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/admin/storage-info");
        setStorageInfo(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Card extra={"w-full h-full p-4"}>
      <div className="mb-auto flex flex-col items-center justify-center">
        <div className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">
          <BsCloudCheck />
        </div>
        <h4 className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
          Your storage
        </h4>
        <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
          Supervise your drive space in the easiest way
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">
            {storageInfo.usedStorageGB ?? 0} GB
          </p>
          <p className="text-sm font-medium text-gray-600">
            {storageInfo.totalStorageGB ?? 0} GB
          </p>
        </div>
        <div className="mt-2 flex h-3 w-full items-center rounded-full bg-lightPrimary dark:!bg-navy-700">
          <span
            style={{ width: `${storageInfo.usedStoragePercentage ?? 0}%` }}
            className="h-full rounded-full bg-brand-500 dark:!bg-white"
          />
        </div>
      </div>
    </Card>
  );
};

export default Storage;
