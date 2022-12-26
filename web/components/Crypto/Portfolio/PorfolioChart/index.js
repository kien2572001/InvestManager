import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BUSD from "../../../../public/busd.png";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart({ portfolio }) {
  const [chartData, setChartData] = React.useState({
    labels: [],
    datasets: [
      {
        label: "Portfolio",
        data: [],
        backgroundColor: [],
        hoverOffset: 4,
      },
    ],
  });
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    let arr = [];
    arr = portfolio.map((item) => {
      return {
        label: item.coin,
        total:
          item.coin === "USDT" || item.coin === "BUSD"
            ? Number.parseFloat(item.free) + Number.parseFloat(item.locked)
            : Number.parseFloat(item.free) * Number.parseFloat(item.price) + Number.parseFloat(item.locked) * Number.parseFloat(item.price),
        free: Number.parseFloat(item.free) + Number.parseFloat(item.locked),
        averagePrice: item.averagePrice,
        price: item.price,
        name: item.name,
      };
    });
    arr.sort((a, b) => b.total - a.total);
    if (arr.length > 5) {
      let others = {
        label: "Others",
        total: 0,
        free: 0,
        averagePrice: 0,
        price: 0,
      };
      for (let i = 4; i < arr.length; i++) {
        others.total += arr[i].total;
      }
      arr[4] = others;
      arr = arr.slice(0, 5);
    }
    console.log(arr);
    arr = arr.map((item) => {
      return {
        label: item.label,
        total: Number.parseFloat(item.total).toFixed(2),
        free: Number.parseFloat(item.free).toFixed(2),
        averagePrice: item.averagePrice,
        price: item.price,
      };
    });
    setItems(arr);
    let labels = arr.map((item) => item.label);
    let sum = arr.reduce((a, b) => a + Number.parseFloat(b.total), 0);
    let data = arr.map((item) => Number.parseFloat(item.total*100) / sum);
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "% of total",
          data: data,
          backgroundColor: [
            "#E63946",
            "#EDAE49",
            "#3376BD",
            "#00798C",
            "#52489C",
          ],
          borderColor: ["#E63946", "#EDAE49", "#3376BD", "#00798C", "#52489C"],
          hoverOffset: 50,
          borderWidth: 1,
        },
      ],
    });
  }, []);
  return (
    <div className="flex flex-col p-4 bg-white rounded shadow col-span-1">
      <p>My Porfolio</p>
      <Doughnut data={chartData} />
      {/* Danh sach coin trong chart */}
      <div className="flex flex-col">
        {items.map((item, index) => {
          return (
            <>
              <div className="flex w-full h-[63px] py-3 items-center justify-between border-b-[1px] border-dashed">
                <div className="flex h-full">
                  <div className="h-full flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {item.label === "BUSD" ? (
                      <Image
                        src={BUSD}
                        alt="BUSD"
                        width={30}
                        height={30}
                      />
                    ) : (
                      <img
                        className="w-[30px] h-[30px]"
                        src={`https://coinicons-api.vercel.app/api/icon/${item.label.toLowerCase()}`}
                        alt="coin"
                      />
                    )}
                  </div>
                  <div className="flex flex-col ml-3">
                    <p className="font-semibold">{item.label}</p>
                    <div className="text-xs">
                      <span
                        className="h-[8px] w-[8px] inline-block rounded-full mr-2"
                        style={{
                          backgroundColor:
                            index === 0
                              ? "#E63946"
                              : index === 1
                              ? "#EDAE49"
                              : index === 2
                              ? "#3376BD"
                              : index === 3
                              ? "#00798C"
                              : "#52489C",
                        }}
                      ></span>
                      {item.label}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <p>
                    {" "}
                    {item.label} {item.free}
                  </p>
                  <div>${item.total}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
