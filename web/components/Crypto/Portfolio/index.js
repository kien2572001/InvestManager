import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import SpotTable from "./SpotTable.js";

export default function Portfolio({ data,others }) {
  const [estimatedBalance, setEstimatedBalance] = React.useState(0);
  useEffect(() => {
    console.log(data);
    let total = 0;
    //SUM array
    data.forEach((item) => {
      total += item.free * item.price;
    });
    setEstimatedBalance(total);
  }, []);
  return (
    <DashboardLayout>
      <div className="w-full h-full flex flex-col items-center">
        {/* Header cua Portfolio */}
        <div className="w-full flex items-center justify-between py-4 px-5">
          {/* Estimated Balance */}
          <div className="">
            <p className="text-gray-500 text-sm font-bold">Estimated Balance</p>
            <div className="flex items-center">
              <p className="text-sm text-gray-500 font-bold mr-3">
                $ {(estimatedBalance/others.btcPrice).toFixed(5)} BTC{" "}
              </p>
              <p className="text-sm text-gray-500 font-bold">≈</p>
              <p className="text-sm text-gray-500 ml-3">${estimatedBalance.toFixed(2)}</p>
            </div>
          </div>
          {/* Today PNL */}
          <div className="">
            <p className="text-gray-500 text-sm font-bold">Today PNL</p>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500 font-bold ">-$6.05</p>
              <p className="text-sm text-gray-500 font-bold">-0.83%</p>
            </div>
          </div>
        </div>
        {/* Table */}
        <SpotTable data={data} />
      </div>
    </DashboardLayout>
  );
}
