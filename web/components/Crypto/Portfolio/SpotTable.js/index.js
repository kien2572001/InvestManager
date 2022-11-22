import React, { useEffect } from "react";
import Table from "antd/lib/table";

export default function SpotTable({ data }) {
  const dataSources = data.map((item, index) => {
    return {
      key: index,
      coin: item.coin,
      free: item.free,
      price: item.price,
      total: item.free * item.price,
    };
  });

  const columns = [
    {
      title: "Coin",
      dataIndex: "coin",
      key: "coin",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Available",
      dataIndex: "free",
      key: "free",
    },
  ];

  const handleSearch = ()=>{
    
  }

  return (
    <div className="w-full h-full flex flex-col items-center px-6">
      {/* Search bar */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Search Coin"
          className="w-[200px] h-10 px-4 border border-gray-300 rounded-md"
        />
      </div>
      <div className="w-full">
        <Table dataSource={dataSources} columns={columns} />
      </div>
    </div>
  );
}
