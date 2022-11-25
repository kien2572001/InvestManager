import Portfolio from "../../../components/Crypto/Portfolio";
import { Spot } from "@binance/connector";

export default function portfolio({ data, others }) {
  return <Portfolio data={data} others={others} />;
}

export async function getServerSideProps(context) {
  const apiKey = process.env.BINANCE_API_KEY;
  const apiSecret = process.env.BINANCE_API_SECRET;
  const client = new Spot(apiKey, apiSecret);
  let res = await client.coinInfo();
  let data = [];
  for (let i = 0; i < res.data.length; i++) {
    if (res.data[i].free > 0) {
      data.push(res.data[i]);
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].coin === "USDT") {
      data[i].price = 1;
    } else {
      let res1 = await client.avgPrice(data[i].coin + "USDT");
      data[i].price = res1.data.price;
    }
  }
  //get BTC price
  let res1 = await client.avgPrice("BTCUSDT");
  let btcPrice = res1.data.price;
  //get history trade
  // let res2 = await client.myTrades('CHZUSDT');
  // console.log(res2.data);
  //get history order
  //console.time("get history order");
  for (let i = 0; i < data.length; i++) {
    if (data[i].coin != "USDT" && data[i].coin != "BUSD") {
      let res2 = await client.myTrades(data[i].coin + "BUSD");
      //let res3 = await client.myTrades(data[i].coin + "USDT");
      let temp = [...res2.data];
      let averagePrice = 0;
      let totalAmount = 0;
      for (let j = 0; j < temp.length; j++) {
        let qty = parseFloat(temp[j].qty);
        let price = parseFloat(temp[j].price);
        if (temp[j].isBuyer) {
          averagePrice =
            (averagePrice * totalAmount + qty * price) / (totalAmount + qty);
          totalAmount += qty;
        } else {
          if (qty >= totalAmount) {
            averagePrice = 0;
            totalAmount = 0;
          } else {
            averagePrice =
              (averagePrice * totalAmount - qty * price) / (totalAmount - qty);
            totalAmount -= qty;
          }
        }
      }
      data[i].averagePrice = averagePrice;
      data[i].history = temp;
    }
  }
  //console.timeEnd("get history order");
  return {
    props: {
      data,
      others: {
        btcPrice,
      },
    }, // will be passed to the page component as props
  };
}
