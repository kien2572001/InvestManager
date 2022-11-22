import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DollarCircleOutlined,
  DownOutlined,
  UpOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
export default function Sidebar() {
  const menu = [
    {
      id: 1,
      name: "Dashboard",
      icon: <HomeOutlined className="text-gray-500" />,
      child: [
        {
          id: uuidv4(),
          name: "Test1",
          link: "/",
        },
        {
          id: uuidv4(),
          name: "Test2",
          link: "/",
        },
      ],
    },
    {
      id: 2,
      name: "Crypto",
      icon: <DollarCircleOutlined className="text-gray-500" />,
      child: [
        {
          id: uuidv4(),
          name: "Porfolio",
          link: "/crypto/portfolio",
        },
        {
          id: uuidv4(),
          name: "Market",
          link: "/crypto/market",
        },
      ],
    },
    {
      id: 3,
      name: "Todos",
      icon: <CalendarOutlined className="text-gray-500" />,
      child: [
        {
          id: uuidv4(),
          name: "Test1",
          link: "/",
        },
        {
          id: uuidv4(),
          name: "Test2",
          link: "/",
        },
      ],
    },
  ];
  const [open, setOpen] = useState();
  const openSubMenu = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="w-full h-screen bg-white px-6 py-3 text-gray-500">
      {/* Logo */}
      <div className="py-[8px] h-[88px]">
        <Image src={Logo} alt="Logo" className="scale-75" />
      </div>
      {/* Menu list */}
      <div>
        <ul>
          {menu.map((item) => (
            <div className="select-none " key={uuidv4()}>
              <li
                className="py-[8px] h-[41px] "
                onClick={() => openSubMenu(item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.icon}
                    <span className="text-gray-500 ml-3 font-medium">
                      {item.name}
                    </span>
                  </div>
                  {open === item.id ? (
                    <UpOutlined className="text-gray-500 " style={{ fontSize: "11px" }} />
                  ) : (
                    <DownOutlined className="text-gray-500"  style={{ fontSize: "11px" }}/>
                  )}
                </div>
              </li>
              <ul className="">
                {open === item.id &&
                  item.child.map((child) => (
                    <li className="py-[8px] h-[41px] " key={uuidv4()}>
                      <div className="flex items-center ml-7">
                        {child.name}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
