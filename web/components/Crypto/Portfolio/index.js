import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import SpotTable from "./SpotTable.js";
import PortfolioChart from "./PorfolioChart";
import {
  UpCircleOutlined,
  DownCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import Image from "next/image";

export default function Portfolio({ data, others }) {
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
          {/* Porfolio chart  */}
          <PortfolioChart portfolio={data} />
          <div className="flex items-center justify-between py-4 px-5">
            {/* Total Balance */}
            <div className="w-[310px] h-[85px] flex items-center bg-white justify-between rounded shadow">
              <div className="flex">
                <div className="h-full w-[85px] flex items-center justify-center">
                  <div className="">
                    <DollarOutlined className="text-2xl" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">TOTAL VALUE</p>
                  <p className="text-xl font-bold">
                    ${estimatedBalance.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mr-5">
                <div className="rounded-md bg-green-100 p-[3px]">
                  <p className="text-green-500 font-medium text-xs">+6.24%</p>
                </div>
              </div>
            </div>
            {/* Total change */}
            <div className="w-[310px] h-[85px] flex items-center bg-white justify-between rounded shadow">
              <div className="flex">
                <div className="h-full w-[85px] flex items-center justify-center">
                  <div className="">
                    <DollarOutlined className="text-2xl" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">TOTAL VALUE</p>
                  <p className="text-xl font-bold">
                    ${estimatedBalance.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mr-5">
                <div className="rounded-md bg-green-100 p-[3px]">
                  <p className="text-green-500 font-medium text-xs">+6.24%</p>
                </div>
              </div>
            </div>
            {/*Day change*/}
            <div className="w-[310px] h-[85px] flex items-center bg-white justify-between rounded shadow">
              <div className="flex">
                <div className="h-full w-[85px] flex items-center justify-center">
                  <div className="">
                    <DollarOutlined className="text-2xl" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">TOTAL VALUE</p>
                  <p className="text-xl font-bold">
                    ${estimatedBalance.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mr-5">
                <div className="rounded-md bg-green-100 p-[3px]">
                  <p className="text-green-500 font-medium text-xs">+6.24%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <SpotTable data={data} />
      </div>
    </DashboardLayout>
  );
}
