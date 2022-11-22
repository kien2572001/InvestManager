import React from "react";
import {
  AlignLeftOutlined,
  BellOutlined,
  ExpandOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Avatar from "../../../public/avatar.jpg";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-full pl-3 pr-6 text-gray-500">
      <AlignLeftOutlined className="text-2xl" />
      <div className="h-full bg-third flex flex-row items-center">
        {/* Hop icon */}
        <div className="bg-white h-full flex items-center ">
          <ExpandOutlined
            style={{ fontSize: "20px", margin: "1px", width: "42px" }}
          />
          <BellOutlined
            style={{ fontSize: "20px", margin: "1px", width: "42px" }}
          />
        </div>
        {/* User avatar */}
        <div className="w-[160px]  flex flex-row py-2 px-4 items-center  ">
          <div className="w-[32px] h-[32px]">
            <Image src={Avatar} alt="avatar" className="rounded-full" />
          </div>
          <div className="ml-4 text-gray-500 mt-1">
            <p className="font-bold text-sm ">John Doe</p>
            <span className="text-xs"> Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
