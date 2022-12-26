import React, { useEffect } from "react";
import Table from "antd/lib/table";

export default function SpotTable({ data }) {
  const dataSources = data
    .map((item, index) => {
      function financial(x) {
        return Number.parseFloat(x).toFixed(2);
      }
      let profitLoss =
        (Number.parseFloat(item.price) / Number.parseFloat(item.averagePrice) -
          1) *
        100;
      if (isFinite(profitLoss)===false) {
        profitLoss = "0.00%";
      } else if (profitLoss < 0) {
        profitLoss = profitLoss.toFixed(2) + "%";
      } else profitLoss = "+" + profitLoss.toFixed(2) + "%";
      if (item.coin === "USDT " || item.coin === "BUSD") {
        profitLoss = "0.00%";
      }
      return {
        key: index,
        coin: item.coin,
        free: financial(item.free),
        price: financial(item.price),
        total: financial(
          Number.parseFloat(item.free) * Number.parseFloat(item.price) +
            Number.parseFloat(item.locked) * Number.parseFloat(item.price)
        ),
        averagePrice: financial(item.averagePrice),
        profitLoss: profitLoss,
        locked: financial(item.locked),
      };
    })
    .sort((a, b) => b.total - a.total);

  const columns = [
    {
      title: "Coin",
      dataIndex: "coin",
      key: "coin",
    },
    {
      title: "Total(USD)",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Available",
      dataIndex: "free",
      key: "free",
    },
    {
      title: "In Order",
      dataIndex: "locked",
      key: "locked",
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
    <div className="w-full h-full flex flex-col items-center px-6 ">
      {/* Search bar */}
      {/* <div className="w-full">
        <input
          type="text"
          placeholder="Search Coin"
          className="w-[200px] h-10 px-4 border border-gray-300 rounded-md"
        />
      </div> */}
      <div className="w-full ">
        <Table dataSource={dataSources} columns={columns} />
      </div>
    </div>
  );
}
