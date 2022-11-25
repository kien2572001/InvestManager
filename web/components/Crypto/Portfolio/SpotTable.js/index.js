import React, { useEffect } from "react";
import Table from "antd/lib/table";

export default function SpotTable({ data }) {
  const dataSources = data.map((item, index) => {
    function financial(x) {
      return Number.parseFloat(x).toFixed(2);
    }
    let profitLoss = financial(
      (1 - financial(item.price) / financial(item.averagePrice)) * 100
    );
    if (profitLoss > 0) {
      profitLoss = "-" + profitLoss + "%";
    } else profitLoss = "+" + profitLoss + "%";
    return {
      key: index,
      coin: item.coin,
      free: financial(item.free),
      price: financial(item.price),
      total: financial(item.free * item.price),
      averagePrice: financial(item.averagePrice),
      profitLoss: profitLoss,
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
      title: "Available",
      dataIndex: "free",
      key: "free",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Average Price",
      dataIndex: "averagePrice",
      key: "averagePrice",
    },
    {
      title: "Profit/Loss",
      dataIndex: "profitLoss",
      key: "profitLoss",
    },
  ];

  const handleSearch = () => {};

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
